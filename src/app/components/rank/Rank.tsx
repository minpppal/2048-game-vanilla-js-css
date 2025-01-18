"use client";
import React, { useState, useEffect } from "react";

const Rank = () => {
  const [rankingData, setRankingData] = useState<
    { name: string; score: number }[]
  >([]);

  useEffect(() => {
    const fetchRankingData = async () => {
      const response = await fetch("/rankingData.json"); // 서버에서 데이터 가져오기
      if (response.ok) {
        const data = await response.json();
        setRankingData(data);
      }
    };
    fetchRankingData();
  }, []);

  return (
    <div className="relative">
      <div className="bg-orange-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">
          Top 10 Rankings
        </h2>
        <div>
          <div>
            <span className="w-[100px]">Rank</span>
            <span>Name</span>
            <span className="text-right">Score</span>
          </div>
          {rankingData.map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span className="w-[100px]">{index + 1}</span>
              <span>{item.name}</span>
              <span className="text-right">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rank;
