import React from "react";
import Tile from "./Tile";

const TileBox = () => {
  const tileNumbers = [
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
    1024,
    2048,
    null,
    null,
    null,
    null,
    null,
  ];

  return (
    <div className="bg-orange-200 p-4  rounded-lg shadow-lg w-[466px] h-[480px] flex flex-wrap  box-border gap-4">
      {tileNumbers.map((num, index) => (
        <Tile key={index} number={num} />
      ))}
    </div>
  );
};

export default TileBox;
