"use server"
import UserService from "@/services/UserService";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface UserBook {
    bookId: string
    name: string,
    author: string,
    date: string,
    price: string,
    category: string,
    description: string,
    link: string
}

const userService = new UserService()

const createFavorite = async (userBook: UserBook) => {
    try {
        const user = await userService.getUser()

        if (!user) {
            throw new Error("User not found")
        }

        const addFavorite = await prisma.favorite.create({
            data: {
                ...userBook,
                userId: user.id
            }
        })
        console.log("Added favorite", addFavorite);
        
    } catch (error) {
        console.log(error);
    }

}


export { createFavorite }