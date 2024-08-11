"use client"
import { Books } from "@/types/Books";
import { useState, useEffect } from "react";

const useSearchBarBooks = (search: string | undefined, selectValue: string | null) => {
    const [books, setBooks] = useState<Books[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                if (!search) {
                    setBooks([])
                    setLoading(false)
                    return
                }

                setLoading(true)

                if (!selectValue) {
                    selectValue = "all"
                }

                const queryMap: Record<string, string> = {
                    author: `inauthor:${search}`,
                    title: `intitle:${search}`,
                    publisher: `inpublisher:${search}`,
                    subject: `subject:${search}`,
                    all: search
                };

                const query = queryMap[selectValue] || search

                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&orderBy=newest&maxResults=10&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
                );

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();

                if (data.totalItems === 0) {
                    setBooks([])
                    return null
                }

                const filteredData: Books[] = data.items.map((item: any) => ({
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo?.authors?.slice(0, 1),
                    description: item.volumeInfo.description,
                    thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
                    categories: item.volumeInfo.categories,
                    averageRating: item.volumeInfo.averageRating,
                    ratingsCount: item.volumeInfo.ratingsCount,
                }));

                // on récupère tous les titres de filteredData dans un tableau titles
                const titles = filteredData.map(({ title }) => title);

                // on filtre filteredData en excluant les doublons de titres
                const filteredByTitle = filteredData.filter(({ title }, index) => {
                    // pour chaque titre, si le titre n'apparaît pas à un index supérieur dans titles, on le garde
                    return titles.indexOf(title) === index;
                });

                // filtre par date du plus récent au plus ancien
                const sortByDate = filteredByTitle.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

                if (sortByDate.length > 0) {
                    setBooks(sortByDate);
                    setLoading(false)
                }
            } catch (error) {
                // type guard avec instanceof pour vérifier que l'objet error est bien une instance de Error
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                } else {
                    setErrorMessage('An unexpected error occurred');
                }
            }
        };
        fetchBooks()

    }, [search, selectValue])

    return { books, errorMessage, loading }
};

export default useSearchBarBooks
