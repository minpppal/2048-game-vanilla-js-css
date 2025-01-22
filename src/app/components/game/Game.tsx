import React from "react";
import TileBox from "./TileBox";
import GameOverModal from "../modal/GameOverModal";
import useGameStatesStore from "@/store/gameStatesStore";
import GameScore from "../gameScore/GameScore";

const Game = () => {
  const { gameOver } = useGameStatesStore();
  return (
    <div className="flex flex-col justify-center items-center w-[500px] mt-[100px] relative">
      <div className="flex mb-[10px] items-center">
        <GameScore />
        <button className="bg-orange-400 text-[20px] w-[110px] h-[40px] rounded-lg font-semibold text-white ml-[54px]">
          New Game
        </button>
      </div>

      <div className="relative">
        <TileBox />
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <GameOverModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
