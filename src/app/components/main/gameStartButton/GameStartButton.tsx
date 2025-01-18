"use client";
import React from "react";

interface GameStartButtonProps {
  onClick: () => void;
}

const GameStartButton: React.FC<GameStartButtonProps> = ({ onClick }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-16 w-full bg-orange-300 rounded-lg transform rotate-3 z-0 mt-5"></div>
      <button
        className="relative h-16 px-8 text-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-transform duration-200 ease-in-out transform hover:-translate-y-1 z-10"
        onClick={onClick} // 클릭 시 onClick prop 호출
      >
        게임 시작
      </button>
    </div>
  );
};

export default GameStartButton;
