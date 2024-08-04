"use client";

import { create } from 'zustand';
import { FavoriteResponse } from '@/types/FavoriteBook';

type FavoritesStore = {
    favorites: FavoriteResponse[];
    filteredFavorites: FavoriteResponse[];
    addFavoriteBook: (newFavorite: FavoriteResponse) => void;
    removeFavoriteBook: (favoriteId: string | boolean) => void;
    filterFavorites: (category: string) => void;
}

export const useFavorites = create<FavoritesStore>((set) => ({
    favorites: [],
    filteredFavorites: [],
    addFavoriteBook: (newFavorite) => set((state) => {
        const isAlreadyFavorite = state.favorites.find(favorite => favorite.bookId === newFavorite.bookId);
        if (isAlreadyFavorite) {
            return state;
        }
        return {
            favorites: [...state.favorites, newFavorite],
            filteredFavorites: [...state.filteredFavorites, newFavorite]
        };
    }),
    removeFavoriteBook: (favoriteId) => set((state) => {
        const updatedFavorites = state.favorites.filter(favorite => favorite.bookId !== favoriteId);
        return {
            favorites: updatedFavorites,
            filteredFavorites: updatedFavorites
        };
    }),
    filterFavorites: (category) => set((state) => {
        if (category === 'all') {
            return { filteredFavorites: state.favorites };
        }
        const filtered = state.favorites.filter(favorite => favorite.category === category);
        return { filteredFavorites: filtered };
    })
}));
