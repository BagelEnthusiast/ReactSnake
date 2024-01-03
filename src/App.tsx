import { useState } from "react";
import { ArrowKey, useArrowKeys } from "./useKeyboard";
import { Block, getGrid } from "./Block";
import { Point } from "./interfaces";
import { v4 as uuidv4 } from "uuid";
import { useInterval } from "./useInterval";
import { CONSTANTS } from "./constants";

function App() {
  const [snake, setSnake] = useState<Point[]>([
    { x: 5, y: 5 },
    { x: 5, y: 4 },
  ]);
  const [apple, setApple] = useState<Point>({ x: 10, y: 8 });

  //TODO: change to enum
  const [direction, setDirection] = useState<"Up" | "Down" | "Left" | "Right">(
    "Up"
  );

  //TODO: make lose condition

  function addSnakeBlock() {
    const delta = {
      Up: { x: 0, y: 1 },
      Down: { x: 0, y: -1 },
      Left: { x: -1, y: 0 },
      Right: { x: 1, y: 0 },
    }[direction];

    const newHead = { ...snake[0] };
    newHead.x += delta.x;
    newHead.y += delta.y;

    const newSnake = [...snake];
    newSnake.unshift(newHead);

    if (newHead.x === apple.x && newHead.y === apple.y) {
      const newApple = { ...apple };
      newApple.x = Math.floor(Math.random() * (CONSTANTS.MaxX - 1));
      newApple.y = Math.floor(Math.random() * (CONSTANTS.MaxY - 1));
      setApple(newApple);
    } else {
      newSnake.pop();
    }

    setSnake([...newSnake]);
  }

  //TODO: add difficulty toggles for user, make time an enum
  useInterval(() => {
    addSnakeBlock();
  }, 300);

  //TODO: ensure user cannot move snake opposite its current direction
  useArrowKeys((arrow) => {
    if (arrow === ArrowKey.Up && direction != "Down") {
      setDirection("Up");
    }
    if (arrow === ArrowKey.Down && direction != "Up") {
      setDirection("Down");
    }
    if (arrow === ArrowKey.Left && direction != "Right") {
      setDirection("Left");
    }
    if (arrow === ArrowKey.Right && direction != "Left") {
      setDirection("Right");
    }
  });

  return (
    <>
      {getGrid().map((p, index) => (
        <Block key={`grid-${index}`} point={p} color="white" />
      ))}
      {/* todo just for testing */}
      {snake.map((b, index) => {
        if (index === 0) {
          return <Block key={uuidv4()} point={b} color="black" />;
        } else {
          return <Block key={uuidv4()} point={b} color="green" />;
        }
      })}
      <Block point={{ x: 4, y: 2 }} color="blue" />
      <Block point={apple} color="red" />
    </>
  );
}

export default App;
