import axios from "axios";
import type { User } from "@/interface/User.interface";
import { REST_API_BASE_URL } from "@/config";

export const api = axios.create({
    baseURL: REST_API_BASE_URL,
    withCredentials: true
});

export async function getListAllUser(token: string) : Promise<User[]>{
    console.log("Data Token : "+token);
    try{
        const response = await api.get<User[]>(`${REST_API_BASE_URL}/getListAll`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }catch(error){
        console.error("Error during user fetch:", error);
        throw new Error("Failed to fetch users");
    }
}

