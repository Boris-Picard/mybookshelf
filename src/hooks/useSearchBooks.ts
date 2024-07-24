"use client";

import { useState, useEffect } from "react";

interface Book {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    [key: string]: any | undefined
}

const useSearchBooks = () => {
    const [books, setBooks] = useState();
    const [errorMessage, setErrorMessage] = useState<Book[] | undefined>([]);

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            setBooks(data?.items);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
        searchAuthor();
    }, []);

    return { books, errorMessage }
};

export default useSearchBooks
