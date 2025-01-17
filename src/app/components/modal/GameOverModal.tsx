"use client";
import React from "react";
import useGameStatesStore from "@/store/gameStatesStore";

const GameOverModal = () => {
  const { gameScore } = useGameStatesStore();
  const handleClick = () => {
    console.log("Ok clicked, reloading...");
    window.location.reload(); // 새로고침
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-10 z-10">
      <div className="w-[200px] h-[180px] bg-white flex flex-col justify-center items-center rounded-lg z-20">
        <h2 className="font-bold text-orange-600 text-3xl mb-4">Game Over!</h2>
        <div className="font-bold text-black text-xl mb-4">
          Your score : {gameScore}
        </div>
        <div
          onClick={handleClick}
          className="cursor-pointer bg-orange-600 text-white text-xs rounded-lg py-2 px-4 mt-4"
        >
          Ok
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
