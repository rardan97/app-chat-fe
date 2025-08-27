import { REST_API_BASE_USER_URL } from "@/config";
import type { User } from "@/interface/User.interface";

import axios from "axios";


export const api = axios.create({
    baseURL: REST_API_BASE_USER_URL,
    withCredentials: true
});

export async function getProfileById(token: string) : Promise<User>{
    try{
        const response = await api.get<User>(`${REST_API_BASE_USER_URL}/user-profile/getProfile`, {
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