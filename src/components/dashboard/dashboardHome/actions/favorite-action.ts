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

const createFavorite = async ({ userBook }: { userBook: UserBook }) => {
    console.log(userBook);

    const fav = await prisma.favorite.create({
        data: {
            ...userBook
        }
    })
    return fav
}


export { createFavorite }