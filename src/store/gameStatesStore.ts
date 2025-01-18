import { create } from "zustand";
import GameStates from "@/types/gameOverStoreTypes";

const useGameStatesStore = create<GameStates>((set) => ({
  gameOver: false,
  setGameOver: (state: boolean) => set({ gameOver: state }),
  gameScore: 0,
  setGameScore: (score: number) => set({ gameScore: score }),
  rankName: "",
  setRankName: (name: string) => set({ rankName: name }),
}));

export default useGameStatesStore;
