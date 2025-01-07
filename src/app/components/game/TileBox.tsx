import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const TileBox: React.FC = () => {
  const [tileNumbers, setTileNumbers] = useState<(number | null)[]>(
    Array(16).fill(null)
  );

  /**
   * 랜덤 숫자 추가 함수
   */
  const addRandomTile = () => {
    setTileNumbers((prevTiles) => {
      // 빈 칸(= null인 인덱스) 찾기
      const emptyIndices = prevTiles
        .map((num, index) => (num === null ? index : null)) // null인 인덱스 찾기
        .filter((index): index is number => index !== null);

      if (emptyIndices.length === 0) {
        return prevTiles; // 빈 칸이 없으면 아무 것도 하지 않음
      }

      const randomIndex =
        emptyIndices[Math.floor(Math.random() * emptyIndices.length)]; // 빈 칸 중 랜덤 선택
      const newNumber = Math.random() < 0.9 ? 2 : 4; // 90% 확률로 2, 10% 확률로 4

      // 새로운 상태 생성
      const newTiles = [...prevTiles];
      newTiles[randomIndex] = newNumber;
      return newTiles;
    });
  };

  // 게임 시작 시 초기 숫자 2개 추가
  useEffect(() => {
    addRandomTile(); // 첫 번째 숫자 추가
    console.log("첫번째숫자");
    addRandomTile(); // 두 번째 숫자 추가
    console.log("두번째숫자");
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  /**
   * 방향키 입력 처리
   */
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        moveTiles("up");
        console.log("윗키");
        break;
      case "ArrowUp":
        moveTiles("up");
        console.log("윗키");
        break;
      case "ArrowUp":
        moveTiles("up");
        console.log("윗키");
        break;
      case "ArrowUp":
        moveTiles("up");
        console.log("윗키");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-orange-200 p-4  rounded-lg shadow-lg w-[466px] h-[480px] flex flex-wrap  box-border gap-4">
      {tileNumbers.map((num, index) => (
        <Tile key={index} number={num} />
      ))}
    </div>
  );
};

export default TileBox;
