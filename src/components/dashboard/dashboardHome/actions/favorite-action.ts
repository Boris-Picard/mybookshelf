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
}

interface FavoriteProps {
    userBook: UserBook[]
}

const createFavorite = async ({ userBook }: FavoriteProps) => {


    const fav = await prisma.favorite.create({
        data: {
            bookId: "deux",
            name: "deux",
            author: "deux",
            date: "deux",
            price: "deux",
            category: "deux",
            description: "deux",
            link: "deux",
            userId: "clz5du9qw000dpen02o5cssxl"
        }
    })
}


export { createFavorite }