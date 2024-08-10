"use server"
import UserService from "@/services/UserService";
import db from "@/lib/db"
import { Books } from "@/types/Books";
import { FavoriteResponse } from "@/types/FavoriteBook";

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
            throw new Error("Livre déja dans les favoris")
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

        return addFavorite
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

        if (!isFavorite) {
            return false
        }

        return isFavorite as FavoriteResponse
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);

            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

const deleteFavorite = async (bookId: string) => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const isFavorite = await db.favorite.findUnique({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id
                }
            }
        })

        if (!isFavorite) {
            throw new Error("Le livre n'est pas dans les favoris")
        }

        const deleteFavoriteBook = await db.favorite.delete({
            where: {
                bookId_userId: {
                    bookId: bookId,
                    userId: user.id
                }
            }
        })

        console.log(deleteFavoriteBook);

        return deleteFavoriteBook
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);

            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

export { createFavoriteBook, getFavorite, deleteFavorite }