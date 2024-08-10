"use server"

import { Books } from "@/types/Books";
import { createFavoriteBook, deleteFavorite } from "@/components/dashboard/dashboardDetailedPage/actions/favorite-book";

const addFavoriteBookButton = async ({ book }: { book: Books }) => {
    try {
        const response = await createFavoriteBook(book)
        return response
    } catch (error) {
        console.log(error);
    }
}

const deleteFavoriteButton = async (bookId: string) => {
    try {
        const response = await deleteFavorite(bookId)
        return response
    } catch (error) {
        console.log(error);
    }
}

export { addFavoriteBookButton, deleteFavoriteButton }