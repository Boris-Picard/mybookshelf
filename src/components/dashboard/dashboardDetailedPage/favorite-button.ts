"use server"

import { Books } from "@/types/Books";
import { createFavoriteBook } from "@/components/dashboard/dashboardDetailedPage/actions/favorite-book";

const addFavoriteBook = async ({ book }: { book: Books }) => {
    try {
        const response = await createFavoriteBook(book)
        return response
    } catch (error) {
        console.log(error);

    }
}

export default addFavoriteBook