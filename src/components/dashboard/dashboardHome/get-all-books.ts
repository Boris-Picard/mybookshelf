"use server"

import { GetAllBooks } from "@/components/dashboard/dashboardDetailedPage/actions/book-status-action";

const GetAllReadBooks = async () => {
    try {
        const response = await GetAllBooks()
        return response
    } catch (error) {
        console.log(error);

    }
}

export default GetAllReadBooks