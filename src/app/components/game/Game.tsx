import React from "react";
import TileBox from "./TileBox";
import GameOverModal from "../modal/GameOverModal";
import useGameStatesStore from "@/store/gameStatesStore";
import GameScore from "../gameScore/GameScore";
const Game = () => {
  const { gameOver } = useGameStatesStore();
  return (
    <div className="flex flex-col justify-center items-center w-[500px] mt-[100px]">
      <h1 className="  text-orange-600 font-bold mb-[200px]">2048</h1>
      <div className=" flex mb-[10px] items-center">
        <GameScore />
        <button className="  bg-orange-400 text-[20px] w-[110px] h-[40px] rounded-lg font-semibold text-white ml-[54px]">
          New Game
        </button>
      </div>

      <div>{gameOver === false ? <TileBox /> : <GameOverModal />}</div>
    </div>
  );
};

export default Game;
