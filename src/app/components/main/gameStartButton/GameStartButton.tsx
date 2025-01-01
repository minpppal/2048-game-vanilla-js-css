"use client";
import React, { useState } from "react";
import Game from "../../game/Game";
const GameStartButton = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const handleStartClick = () => {
    setGameStarted(true);
  };
  return (
    <div className="relative">
      {!gameStarted && (
        <>
          {/* 배경 div의 크기를 버튼과 정확히 맞추기 */}
          <div className="absolute inset-0 h-16 w-full bg-orange-300 rounded-lg transform rotate-3 z-0 mt-5"></div>
          <button
            className="relative h-16 px-8 text-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-transform duration-200 ease-in-out transform hover:-translate-y-1 z-10"
            onClick={handleStartClick}
          >
            Start Game
          </button>
        </>
      )}
      {gameStarted && <Game />}
    </div>
  );
};

export default GameStartButton;
