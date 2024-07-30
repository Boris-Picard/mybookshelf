
export interface FavoriteBook {
    bookId: string,
    name?: string,
    author?: string,
    date?: string,
    price?: string,
    category?: string[],
    description?: string,
    link?: string
}

export type FavoriteResponse = {
    bookId: string;
    name: string | null;
    author: string | null;
    date: string | null;
    price: string | null;
    category: string[] | null;
    thumbnail: string | null
    description: string | null;
    averageRating: number | null
    ratingsCount: number | null
    link: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}
