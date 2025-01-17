import React from "react";
import { useRouter } from "next/router";

const GameOverModal = () => {
  const router = useRouter();

  const handleOkClick = () => {
    router.push("/");
  };

  return (
    <div className="w-[300px] h-[200px] bg-slate-400">
      Game Over
      <div className="cursor-pointer" onClick={handleOkClick}>
        Ok
      </div>
    </div>
  );
};

export default GameOverModal;
