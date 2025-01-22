"use client";
import React from "react";

interface RankButtonProps {
  onClick: () => void;
}

const RankButton: React.FC<RankButtonProps> = ({ onClick }) => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 h-[48px] w-[170px] bg-orange-300 rounded-lg transform rotate-3 z-0 mt-8"></div>
      <button
        className="relative h-[48px] w-[170px] px-8 text-xl font-semibold  bg-orange-800 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-transform duration-200 ease-in-out transform hover:-translate-y-1 z-10"
        onClick={onClick} // 클릭 시 onClick prop 호출
      >
        Rank
      </button>
    </div>
  );
};

export default RankButton;
