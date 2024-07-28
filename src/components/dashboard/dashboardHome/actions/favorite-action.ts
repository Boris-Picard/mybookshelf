"use server"
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
    userId: string
}

const createFavorite = async (userBook: UserBook) => {
    const fav = await prisma.favorite.create({
        data: {
            ...userBook
        }
    })
}


export { createFavorite }