"use server"
import UserService from "@/services/UserService";
import db from "@/lib/db"
import { Books } from "@/types/Books";

const userService = new UserService()

const createFavoriteBook = async (userBook: Books) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const favorite = await db.favorite.findUnique({
            where: {
                bookId_userId: {
                    bookId: userBook.id,
                    userId: user.id
                }
            }
        })

        if (favorite) {
            throw new Error("Book already in favorite")
        }

        const addFavorite = await db.favorite.create({
            data: {
                bookId: userBook.id,
                name: userBook.title,
                author: userBook.authors,
                description: userBook.description,
                thumbnail: userBook.thumbnail,
                page: userBook.page,
                category: userBook.categories,
                date: userBook.publishedDate,
                link: userBook.previewLink,
                userId: user.id,
            }
        })

        return true
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);

            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}


const getFavorite = async (bookId: string) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const isFavorite = await db.favorite.findUnique({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id,
                }
            }
        })
        
        return true
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);

            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

export { createFavoriteBook, getFavorite }