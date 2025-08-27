
import type { User } from "@/interface/User.interface";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { addInviteMemberUsers, getListNonMemberUsers } from "@/api/MemberUserApi";
import type { InviteMemberUserReq } from "@/interface/MemberUser.interface";

export default function NonMemberList() {

    const hasFetched = useRef(false);
    const [users, setUsers] = useState<User[]>([]);

    const getListUser = useCallback(async (): Promise<void> => {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        if (!token){
            return;
        }
        try {
            const response = await getListNonMemberUsers(token);
            console.log("Success processing data");
            setUsers(response);
        } catch (error) {
            console.log("Failed processing data", error);
            throw error;
        }
    }, []);

    useEffect(() => {
        console.log(hasFetched);
        if (!hasFetched.current) {
            getListUser();
            hasFetched.current = true; // Cegah request kedua
        }
    }, [getListUser]);

    const handleInvite = async  (userInviteId: number) => {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        if (!token){
            return;
        }

        try {
            const newInvite: InviteMemberUserReq = {
                userInviteId
            }
            const response = addInviteMemberUsers(token, newInvite);
            console.log(response);
            console.log("Success processing data");
        } catch (error) {
            console.log("Failed processing data", error);
            throw error;
        }

        console.log("Invite send to user ID : ", userInviteId);
    }
  
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">User Invitations</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {users
                    .filter((user) => user.userId !== null && user.userId !== undefined)
                    .filter((user) => user.status !== "pending")
                    .map((user) => (
                        <Card
                            key={user.userId}
                            className="shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    {user.displayName || "No Name"}
                                </CardTitle>
                                <CardDescription className="text-gray-500">
                                    @{user.username || "username"}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2">
                                    <span className="font-semibold">Email:</span> {user.email || "-"}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">User ID:</span> {user.userId}
                                </p>
                            </CardContent>

                            <CardFooter className="flex justify-end">
                                <CardAction>
                                   <button
                                        className={`px-4 py-2 rounded transition text-white ${
                                            user.status === "waiting" 
                                                ? "bg-gray-400 cursor-not-allowed" 
                                                : "bg-blue-600 hover:bg-blue-700"
                                        }`}
                                        onClick={() => handleInvite(user.userId)}
                                        disabled={user.status === "waiting"}
                                    >
                                        {user.status === "waiting" ? "Waiting" : user.status === "nonmember" ? "Invite" : "Unknown"}
                                    </button>
                                </CardAction>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}