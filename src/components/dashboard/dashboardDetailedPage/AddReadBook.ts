"use server"

import createReadBookStatus from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action"

const AddReadBook = async (bookId: string, pageNumber: number) => {
    console.log(bookId);
    console.log(pageNumber);

    await createReadBookStatus(bookId, pageNumber)

}

export default AddReadBook