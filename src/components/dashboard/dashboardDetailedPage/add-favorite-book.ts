"use server"

import { Books } from "@/types/Books";
import createFavoriteBook from "./actions/add-favorite-book";

const addFavoriteBook = async ({ book }: { book: Books }) => {
    try {
        const response = await createFavoriteBook(book)
        console.log(response);
        return response
    } catch (error) {
        console.log(error);

    }
}

export default addFavoriteBook