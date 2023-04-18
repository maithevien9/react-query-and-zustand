import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoriteReposState {
  favoriteReposIds: number[]
  addFavoriteRepo: (id: number) => void
  removeFavoriteRepo: (id: number) => void
}

const useFavoriteReposStore = create(
  persist<FavoriteReposState>(
    set => ({
      addFavoriteRepo: (id: number) => {
        set(state => ({
          favoriteReposIds: [...state.favoriteReposIds, id]
        }))
      },
      favoriteReposIds: [],
      removeFavoriteRepo: (id: number) =>
        set(state => ({
          favoriteReposIds: state.favoriteReposIds.filter(repoId => repoId !== id)
        }))
    }),
    { name: 'favorite-repos' }
  )
)

export default useFavoriteReposStore
