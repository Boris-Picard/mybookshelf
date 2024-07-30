"use client"

import { create } from 'zustand'

import { FavoriteResponse } from '@/types/FavoriteBook'

type FavoritesStore = {
    favorites: FavoriteResponse[]
    addFavoriteBook: (newFavorite: FavoriteResponse) => void
    removeFavoriteBook: (favoriteId: string | boolean) => void
}

export const useFavorites = create<FavoritesStore>((set) => ({
    favorites: [],
    addFavoriteBook: (newFavorite) => set((state) => ({
        favorites: [...state.favorites, newFavorite]
    })),
    removeFavoriteBook: (favoriteId) => set((state) => ({
        favorites: state.favorites.filter((data) => data.bookId !== favoriteId)
    }))
}))
