import db from "@/lib/db"

class UserService {
    // get a unique user
    async getUser(sessionId: string | undefined) {
        try {
            const user = await db.user.findUnique({
                where: {
                    id: sessionId
                }
            })
            if (!user) {
                return null
            }
            return user
        } catch (error) {
            console.error(error)
            return null
        }
    }
}

export default UserService