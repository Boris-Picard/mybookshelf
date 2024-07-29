"use server"
import UserService from "@/services/UserService";
import { PrismaClient } from "@prisma/client";

import { FavoriteBook, FavoriteResponse } from "@/types/FavoriteBook"

const prisma = new PrismaClient()

const userService = new UserService()

const createFavorite = async (userBook: FavoriteBook): Promise<boolean | string> => {
    try {
        const user = await userService.getUser()

        if (!user) {
            throw new Error("User not found")
        }

        const favorite = await prisma.favorite.findUnique({
            where: {
                bookId: userBook.bookId,
                userId: user.id
            }
        })

        if (favorite) {
            throw new Error("Book already in favorite")
        }

        const addFavorite = await prisma.favorite.create({
            data: {
                ...userBook,
                userId: user.id,
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

const getFavorite = async (): Promise<FavoriteResponse[] | null | string> => {
    try {
        const user = await userService.getUser()

        if (!user) {
            throw new Error("User not found")
        }

        const favorite = await prisma.favorite.findMany({
            where: {
                userId: user.id
            }
        })
        return favorite
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        } else {
            throw new Error("An error occured")
        }
    }
}


export { createFavorite, getFavorite }