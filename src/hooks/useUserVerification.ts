"use client"
import UserService from "@/services/UserService";
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
    const [userData, setUserData] = useState<UserData>()
    const [error, setError] = useState<string | null>(null)
    const userObject = new UserService();
    console.log(userObject);


    useEffect(() => {
        const verifyUser = async () => {
            try {
                const userPromise = await userObject.verifyUser();
                console.log(userPromise);
                if (!userPromise) {
                    return setUserData(undefined)
                }
                return setUserData(userPromise)
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