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

        const alreadyRead = await db.readStatus.findUnique({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id
                }
            }
        })

        if (alreadyRead) {
            throw new Error("Livre déjà marqué comme lu")
        }

        const addBook = await db.readStatus.create({
            data: {
                bookId: bookId,
                userId: user.id,
                isRead: true,
                pageNumber: pageNumber,
            }
        })

        return true
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

const getReadBook = async (bookId: string) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const isRead = await db.readStatus.findUnique({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id
                }
            }
        })

        return isRead
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

const deleteReadBook = async (bookId: string) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const isRead = await db.readStatus.delete({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id
                }
            }
        })

        return true
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

export { createReadBookStatus, getReadBook, deleteReadBook }