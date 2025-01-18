"use client";
import React from "react";

interface RankButtonProps {
  onClick: () => void;
}

const RankButton: React.FC<RankButtonProps> = ({ onClick }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick} // 클릭 시 onClick prop 호출
        className="h-16 px-8 text-xl bg-orange-800 text-white font-semibold rounded-lg shadow-lg transition-transform duration-200"
      >
        Rank
      </button>
    </div>
  );
};

export default RankButton;
