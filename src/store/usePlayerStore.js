import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePlayerStore = create(
  persist(
    (set) => ({
      // 🎵 Player
      currentSongId: null,
      isPlaying: false,

      playSong: (id) =>
        set({
          currentSongId: id,
          isPlaying: true,
        }),

      pauseSong: () =>
        set({
          isPlaying: false,
        }),

      // 🎨 Theme
      theme: "light",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      // 🎼 Genre
      currentGenre: "All",
      setGenre: (genre) => set({ currentGenre: genre }),
    }),
    {
      name: "music-app-store",
    }
  )
);

export default usePlayerStore;