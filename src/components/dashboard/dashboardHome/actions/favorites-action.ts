import db from "@/lib/db"
import { getCurrentUser } from "@/services/CurrentUser"


const createFavorite = async () => {
    const user = await getCurrentUser()

    if (!user) {
        throw new Error("User not found")
    }
}


export { createFavorite }