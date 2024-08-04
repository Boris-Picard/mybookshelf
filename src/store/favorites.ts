"use client";

import { create } from 'zustand';
import { FavoriteResponse } from '@/types/FavoriteBook';

type FavoritesStore = {
    favorites: FavoriteResponse[];
    filteredFavorites: FavoriteResponse[];
    filteredAuthors: FavoriteResponse[];
    addFavoriteBook: (newFavorite: FavoriteResponse) => void;
    removeFavoriteBook: (favoriteId: string | boolean) => void;
    filterFavorites: (category: string) => void;
    filterAuthors: (author: string) => void;
}

export const useFavorites = create<FavoritesStore>((set) => ({
    favorites: [],
    filteredFavorites: [],
    filteredAuthors: [],
    addFavoriteBook: (newFavorite) => set((state) => {
        const isAlreadyFavorite = state.favorites.find(favorite => favorite.bookId === newFavorite.bookId);
        if (isAlreadyFavorite) {
            return state;
        }
        return {
            favorites: [...state.favorites, newFavorite],
            filteredFavorites: [...state.filteredFavorites, newFavorite],
            filteredAuthors: [...state.filteredAuthors, newFavorite],
        };
    }),
    removeFavoriteBook: (favoriteId) => set((state) => {
        const updatedFavorites = state.favorites.filter(favorite => favorite.bookId !== favoriteId);
        return {
            favorites: updatedFavorites,
            filteredFavorites: updatedFavorites,
            filteredAuthors: updatedFavorites,
        };
    }),
    filterFavorites: (category) => set((state) => {
        if (category === 'all') {
            return { filteredFavorites: state.favorites };
        }
        const filtered = state.favorites.filter(favorite => favorite.category === category);
        return { filteredFavorites: filtered };
    }),
    filterAuthors: (author) => set((state) => {
        if (author === "all") {
            return { filteredAuthors: state.favorites }
        }
        const filtered = state.favorites.filter(favorite => favorite.author === author)
        return { filteredAuthors: filtered }
    })
}));
