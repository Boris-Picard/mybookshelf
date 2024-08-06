"use server"

import createReadBookStatus from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action"

const AddReadBook = async (bookId: string, pageNumber: number) => {
    try {
        await createReadBookStatus(bookId, pageNumber)
    } catch (error) {
        console.log(error);
    }

}

export default AddReadBook