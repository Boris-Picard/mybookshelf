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
            return user
        } catch (error) {
            return error
        }
    }
}

export default UserService