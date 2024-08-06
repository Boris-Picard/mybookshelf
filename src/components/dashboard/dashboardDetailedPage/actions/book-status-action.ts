"use server"
import UserService from "@/services/UserService";
import db from "@/lib/db"

const userService = new UserService()

const createReadBookStatus = async (bookId: string, pageNumber: number) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        // const alreadyRead = await db.readStatus.findUnique({
        //     where: {
        //         idBook: bookId,
        //         userId: user.id
        //     }
        // })

        // if (alreadyRead) {
        //     throw new Error("Book already read")
        // }

        const addBook = await db.readStatus.create({
            data: {
                idBook: bookId,
                userId: user.id,
                isRead: true,
                pageNumber: pageNumber,
            }
        })
        console.log(addBook);

        return addBook
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);

            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

export default createReadBookStatus