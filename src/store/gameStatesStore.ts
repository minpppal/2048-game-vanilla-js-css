import { create } from "zustand";
import GameStates from "@/types/gameOverStoreTypes";

const useGameStatesStore = create<GameStates>((set) => ({
  gameOver: false,
  setGameOver: (state: boolean) => set({ gameOver: state }),
  gameScore: 0,
  setGameScore: (score: number) =>
    set((state) => ({ gameScore: state.gameScore + score })),
}));

export default useGameStatesStore;
