"use server"
import db from "@/lib/db"
import { getCurrentUser } from "@/services/CurrentUser"

class UserService {
    async getUser() {
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

    async verifyUser(params?: string | null) {
        try {
            const session = await getCurrentUser()

            if (!session || !session.id) {
                return Response.redirect(new URL("/"))
            }

            const user = await db.user.findUnique({
                where: {
                    id: session.id
                }
            })

            if (!user) {
                return null
            }

            if (params) {
                if (params !== user.id || params !== session.id) {
                    return null
                }
            }

            return user
        } catch (error) {
            console.error("Error fetching user:", error)
            return null
        }
    }
}

export default UserService
