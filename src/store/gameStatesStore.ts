import { create } from "zustand";
import GameStates from "@/types/gameOverStoreTypes";

const useGameStatesStore = create<GameStates>((set) => ({
  gameOver: false,
  setGameOver: (state) => set({ gameOver: state }),
}));

export default useGameStatesStore;
