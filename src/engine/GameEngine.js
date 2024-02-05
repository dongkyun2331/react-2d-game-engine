// GameEngine.js
import React, { useEffect, useRef } from "react";

const GameEngine = ({ updateCallback }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const update = () => {
      updateCallback(ctx);
      requestAnimationFrame(update);
    };

    // 초기 게임 엔진 시작
    update();
  }, [updateCallback]);

  return <canvas ref={canvasRef} width={1900} height={900} />;
};

export default GameEngine;
