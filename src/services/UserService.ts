"use server"
import db from "@/lib/db"
import { getCurrentUser } from "@/services/CurrentUser"
import { User } from "next-auth"


class UserService {
    async getUser(): Promise<User | null> {
        try {
            const session = await getCurrentUser()

            const user = await db.user.findUnique({
                where: {
                    id: session?.id
                }
            })

            if (!user) {
                return null
            }

            return user
        } catch (error) {
            console.error("Error fetching user:", error)
            return null
        }
    }
}

export default UserService;
