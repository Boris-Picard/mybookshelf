"use client";

import { Books } from "@/types/Books";
import { useState, useEffect } from "react";

const useSearchBooks = () => {
    const [books, setBooks] = useState<Books[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const searchAuthor = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=bestsellers&orderBy=newest&maxResults=40&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

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

            // on récupère tous les titres de filteredBooks dans un tableau titles
            const titles = filteredBooks.map(({ title }) => title);

            // on filtre filteredBooks en excluant les doublons de titres
            // pour chaque titre, si le titre n'apparaît pas à un index supérieur dans titles, on le garde
            const filteredByTitle = filteredBooks.filter(({ title }, index) => !titles.includes(title, index + 1));

            // filtre par date du plus récent au plus ancien
            const sortByDate = filteredByTitle.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
            
            setBooks(sortByDate);
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
