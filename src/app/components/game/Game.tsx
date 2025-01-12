import React from "react";
import TileBox from "./TileBox";
import GameOverModal from "../modal/GameOverModal";
import useGameStatesStore from "@/store/gameStatesStore";
const Game = () => {
  const { gameOver } = useGameStatesStore();
  return (
    <div className="flex flex-col justify-center items-center w-[500px] mt-[100px]">
      <h1 className="  text-orange-600 font-bold mb-[200px]">2048</h1>
      <div>{gameOver === false ? <TileBox /> : <GameOverModal />}</div>
    </div>
  );
};

export default Game;
