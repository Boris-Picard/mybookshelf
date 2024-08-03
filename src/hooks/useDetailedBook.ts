"use client";

import { Books } from "@/types/Books";
import { useState, useEffect } from "react";

const useDetailedBook = (bookId: string) => {
    const [detailedBook, setdetailedBook] = useState<Books[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            
            if (data.totalItems === 0) {
                return null
            }

            const filteredData: Books[] = [data].map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo?.authors?.join(" - "),
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo?.imageLinks?.medium,
                categories: item.volumeInfo.categories,
                publishedDate: item.volumeInfo.publishedDate,
                averageRating: item.volumeInfo.averageRating,
                ratingsCount: item.volumeInfo.ratingsCount,
                previewLink: item.volumeInfo.previewLink,
                infoLink: item.volumeInfo.infoLink,
                amount: item.saleInfo.listPrice?.amount,
                currencyCode: item.saleInfo.listPrice?.currencyCode,
                pdf: item.accessInfo.pdf.acsTokenLink,
                webReader: item.accessInfo.webReaderLink,
                searchInfo: item.searchInfo?.textSnippet,
            }));
            setdetailedBook(filteredData);
        } catch (error) {
            // type guard avec instanceof pour vérifier que l'objet error est bien une instance de Error
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return { detailedBook, errorMessage }
};

export default useDetailedBook
