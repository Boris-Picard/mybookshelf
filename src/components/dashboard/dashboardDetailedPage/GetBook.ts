"use server"

import { getReadBook } from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action"

const GetBook = async (bookId: string) => {
    try {
        const response = await getReadBook(bookId)
        return response
    } catch (error) {
        console.log(error);

    }
}

export default GetBook