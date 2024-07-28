"use server"
import UserService from "@/services/UserService";
import { PrismaClient } from "@prisma/client";

import { FavoriteBook } from "@/types/FavoriteBook"

const prisma = new PrismaClient()

const userService = new UserService()

const createFavorite = async (userBook: FavoriteBook) => {
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

        if(favorite) {
            throw new Error("Book already in favorite")
        }

        const addFavorite = await prisma.favorite.create({
            data: {
                ...userBook,
                userId: user.id,
            }
        })
        console.log("Added favorite", addFavorite);

    } catch (error) {
        console.log(error);
    }
}


export { createFavorite }