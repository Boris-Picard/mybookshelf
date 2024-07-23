"use client"
import UserService from "@/services/UserService"
import { useEffect, useState } from "react"

interface UserData {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

const useUserVerification = () => {
    const userObject = new UserService();
    const [userData, setUserData] = useState<UserData>()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                
                console.log(userObject);
                const user = await userObject.verifyUser();
                console.log(user);
                if (!user) {
                    return setUserData(undefined)
                }
                return setUserData(user)
            } catch (error) {
                console.log(error);
                setError(error as string)
                return setUserData(undefined)
            }
        }
        verifyUser()
    }, [])
    console.log(userData);

    return { userData, error }
}

export default useUserVerification