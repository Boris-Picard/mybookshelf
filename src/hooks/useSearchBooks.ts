"use client";

import { useState, useEffect } from "react";

interface VolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: { type: string; identifier: string }[];
    readingModes?: { text: boolean; image: boolean };
    pageCount?: number;
    printType?: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
    };
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
}

interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo?: any;
    accessInfo?: any;
    searchInfo?: any;
}

const useSearchBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

            setBooks(data?.items);
        } catch (error) {
            // type guard avec instanceof on vérifie que error contient bien une erreur
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
