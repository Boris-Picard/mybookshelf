"use client";

import { Books } from "@/types/Books";
import { useState, useEffect } from "react";

const useSearchBooks = () => {
    const [books, setBooks] = useState<Books[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=bestsellers&orderBy=newest&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            
            
            const filteredBooks: Books[] = data.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors.join(" - "),
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo.imageLinks.thumbnail,
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
                searchInfo: item.searchInfo.textSnippet,
            }));

            setBooks(filteredBooks);
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
        searchAuthor();
    }, []);

    return { books, errorMessage }
};

export default useSearchBooks
