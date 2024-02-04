// Game.js
import React, { useState, useEffect } from "react";
import GameEngine from "./engine/GameEngine";

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });

  const handleKeyPress = (event) => {
    // 키보드 이벤트 처리
    switch (event.key) {
      case "ArrowUp":
        setPlayerPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 50,
        }));
        break;
      case "ArrowDown":
        setPlayerPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + 50,
        }));
        break;
      case "ArrowLeft":
        setPlayerPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x - 50,
        }));
        break;
      case "ArrowRight":
        setPlayerPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + 50,
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // 키보드 이벤트 리스너 등록
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const updateCallback = (ctx) => {
    // 게임 업데이트 로직을 구현합니다.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(playerPosition.x, playerPosition.y, 50, 50);
  };

  return (
    <div>
      <GameEngine updateCallback={updateCallback} />
    </div>
  );
};

export default Game;
