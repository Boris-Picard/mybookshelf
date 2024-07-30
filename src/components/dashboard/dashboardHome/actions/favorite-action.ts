"use server"
import UserService from "@/services/UserService";
import db from "@/lib/db"

import { FavoriteBook, FavoriteResponse } from "@/types/FavoriteBook"

const userService = new UserService()

const createFavorite = async (userBook: FavoriteBook): Promise<string | FavoriteResponse> => {
    try {
        const user = await userService.getUser()

        if (!user || typeof user.id !== "string") {
            throw new Error("User not found")
        }

        const favorite = await db.favorite.findUnique({
            where: {
                bookId: userBook.bookId,
                userId: user.id
            }
        })

        if (favorite) {
            throw new Error("Book already in favorite")
        }

        const addFavorite = await db.favorite.create({
            data: {
                ...userBook,
                userId: user.id,
            }
        })

        return addFavorite as FavoriteResponse

    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

const getFavorites = async (): Promise<FavoriteResponse[] | string> => {
    try {
        const user = await userService.getUser()

        if (!user) {
            throw new Error("User not found")
        }

        const favorite = await db.favorite.findMany({
            where: {
                userId: user.id
            }
        })
        return favorite as FavoriteResponse[]
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}

const deleteFavorite = async (bookId: string): Promise<boolean | string> => {
    try {
        const user = await userService.getUser()

        if (!user) {
            throw new Error("User not found")
        }

        const favorite = await db.favorite.delete({
            where: {
                bookId: bookId,
                userId: user.id
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

export { createFavorite, getFavorites, deleteFavorite }