import React from "react";
import TileBox from "./TileBox";
const Game = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[500px] mt-[100px]">
      <h1 className="  text-orange-600 font-bold mb-[200px]">2048</h1>
      <div>
        <TileBox />
      </div>
    </div>
  );
};

export default Game;
