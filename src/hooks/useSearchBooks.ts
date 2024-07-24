"use client";

import { useState, useEffect } from "react";

const useSearchBooks = () => {
    const [books, setBooks] = useState<object>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546&key=${process.env.GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setBooks(data?.entries);
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
