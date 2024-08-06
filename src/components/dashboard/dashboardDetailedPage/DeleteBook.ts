"use server"

import { deleteReadBook } from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action"

const DeleteBook = async (bookId: string) => {
    try {
        const response = await deleteReadBook(bookId)
        return response
    } catch (error) {
        console.log(error);
    }
}

export default DeleteBook