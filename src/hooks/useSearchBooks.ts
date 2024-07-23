"use client";

import { useState, useEffect } from "react";

const useSearchBooks = () => {
    const [books, setBooks] = useState<object>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                "https://openlibrary.org/authors/OL23919A/works.json"
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setBooks(data?.entries);
        } catch (error) {
            console.log(error);
            setErrorMessage(error);
        }
    };

    useEffect(() => {
        searchAuthor();
    }, []);

    return { books }
};

export default useSearchBooks
