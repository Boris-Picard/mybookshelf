"use client";

import { Books } from "@/types/Books";
import { useState, useEffect } from "react";



const useCategoriesBooks = ({ category }: { category: string | undefined }) => {
    const [categoriesBooks, setCategoriesBooks] = useState<Books[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${category}&orderBy=relevance&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}`
            );
            if (!response.ok) {
                setErrorMessage(`Error: ${response.status}`);
            }
            const data = await response.json();

            if (data.totalItems === 0) {
                setErrorMessage("La catégorie n'existe pas")
            }

            const filteredData: Books[] = data.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo?.authors?.join(" - "),
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
                page: item.volumeInfo?.pageCount,
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

            // on récupère tous les titres de filteredData dans un tableau titles
            const titles = filteredData.map(({ title }) => title);

            // on filtre filteredData en excluant les doublons de titres
            const filteredByTitle = filteredData.filter(({ title }, index) => {
                // pour chaque titre, si le titre n'apparaît pas à un index supérieur dans titles, on le garde
                return titles.indexOf(title) === index;
            });

            // filtre par date du plus récent au plus ancien
            const sortByDate = filteredByTitle.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
            if (sortByDate) {
                setCategoriesBooks(sortByDate);
                setLoadingCategories(false)
            }
        } catch (error) {
            // type guard avec instanceof pour vérifier que l'objet error est bien une instance de Error
            if (error instanceof Error) {
                setErrorMessage(error.message);
                setLoadingCategories(false)
            } else {
                setErrorMessage('An unexpected error occurred');
                setLoadingCategories(false)
            }
        }
    };

    useEffect(() => {
        if (category) {
            fetchBooks();
        }
    }, [category]);

    return { categoriesBooks, errorMessage, loadingCategories }
};

export default useCategoriesBooks
