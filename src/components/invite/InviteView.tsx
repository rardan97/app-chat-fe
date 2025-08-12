
import { getListAllUser } from "@/api/UserApi";
import type { User } from "@/interface/User.interface";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";



export default function InviteView() {

    
const hasFetched = useRef(false);
    const [users, setUsers] = useState<User[]>([]);

    const getListUser = useCallback(async (): Promise<void> => {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        if (!token){
            return;
        }
        try {
            const response = await getListAllUser(token);
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


    
   

    

  return (
    <>
        <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Invitations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users
          .filter((user) => user.userId !== null && user.userId !== undefined)
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
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => alert(`Invite sent to ${user.displayName}`)}
                  >
                    Invite
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