"use client";
import React, { useState } from "react";
import GameStartButton from "./gameStartButton/GameStartButton";
import Rank from "../rank/Rank";
import RankButton from "../rank/RankButton";
import Game from "../game/Game";

const Main = () => {
  const [clickButton, setClickButton] = useState<"gameStart" | "rank" | null>(
    null
  );
  const handleButtonClick = (button: "gameStart" | "rank") => {
    setClickButton(button);
  };
  return (
    <div>
      {clickButton === null && (
        <>
          <GameStartButton onClick={() => handleButtonClick("gameStart")} />
          <RankButton onClick={() => handleButtonClick("rank")} />
        </>
      )}
      {/* 상태에 맞게 클릭된 버튼에 해당하는 컴포넌트만 렌더링 */}
      {clickButton === "gameStart" && <Game />}
      {clickButton === "rank" && <Rank />}
    </div>
  );
};

export default Main;
