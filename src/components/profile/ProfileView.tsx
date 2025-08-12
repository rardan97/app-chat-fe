import { getProfileById } from "@/api/ProfileApi";
import { useAuth } from "@/context/AuthContext";
import { useCallback, useEffect, useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";



export default function ProfileView() {

    
const { user } = useAuth();


    const [userId, setUserId] = useState<number>();  
    const [displayName, setdisplayName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
   
    const getProfile = useCallback(async (): Promise<void> => {
        const token = localStorage.getItem("accessToken");
        console.log("token : "+token);
        if (!token){
            return;
        }
        const paramUserId = user?.userId;
        try {

            
            if (paramUserId !== undefined) {
                const response = await getProfileById(token, paramUserId);
                console.log("Success processing data");
                setUserId(response.userId);
                setdisplayName(response.displayName);
                setUsername(response.username);
                setEmail(response.email);
            }
            
        } catch (error) {
            console.log("Failed processing data", error);
            throw error;
        }
    }, [user]);
    
    useEffect(() => {
            
                getProfile();
     
    }, [getProfile]);


    
   

    

  return (
    <>

    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Invitations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
            <Card
              className="shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {displayName || "No Name"}
                </CardTitle>
                <CardDescription className="text-gray-500">
                  @{username || "username"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="mb-2">
                  <span className="font-semibold">Email:</span> {email || "-"}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">User ID:</span> {userId}
                </p>
              </CardContent>

              <CardFooter className="flex justify-end">
                <CardAction>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => alert(`Invite sent to ${displayName}`)}
                  >
                    Edit
                  </button>
                </CardAction>
              </CardFooter>
            </Card>
      </div>
    </div>


    
   
    </>
  )
}