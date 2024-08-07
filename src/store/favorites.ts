"use client";

import { create } from 'zustand';
import { FavoriteResponse } from '@/types/FavoriteBook';

type FavoritesStore = {
    favorites: FavoriteResponse[];
    addFavoriteBook: (newFavorite: FavoriteResponse) => void;
    removeFavoriteBook: (favoriteId: string | boolean) => void;
}

export const useFavorites = create<FavoritesStore>((set) => ({
    favorites: [],
    addFavoriteBook: (newFavorite) => set((state) => {
        const isAlreadyFavorite = state.favorites.find(favorite => favorite.bookId === newFavorite.bookId);
        if (isAlreadyFavorite) {
            return state;
        }
        return {
            favorites: [...state.favorites, newFavorite],
        };
    }),
    removeFavoriteBook: (favoriteId) => set((state) => {
        const updatedFavorites = state.favorites.filter(favorite => favorite.bookId !== favoriteId);
        return {
            favorites: updatedFavorites,
        };
    }),
}));
