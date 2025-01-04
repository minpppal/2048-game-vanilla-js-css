import React from "react";

interface TileProps {
  number: number | null;
}

const Tile = ({ number }: TileProps) => {
  return (
    <div className="flex items-center justify-center  w-[96px] h-[96px] bg-amber-100 text-amber-800 rounded-lg text-[24px] font-bold shadow-lg">
      {number !== null ? number : ""}
    </div>
  );
};

export default Tile;
