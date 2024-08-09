"use server"

import { createReadBookStatus } from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action"

const addReadBook = async (bookId: string, pageNumber: number) => {
    try {
        const response = await createReadBookStatus(bookId, pageNumber)
        return response
    } catch (error) {
        console.log(error);
    }
}

export default addReadBook