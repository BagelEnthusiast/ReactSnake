import { useEffect, useState } from 'react';
import { ArrowKey, useArrowKeys } from './useKeyboard';
import { Block, getGrid } from './Block'
import { Point } from './interfaces'



function App() {
  const [block, setBlock] = useState<Point>({ x: 5, y: 5 });
  const [tail, setTail] = useState<Point>({x: 5, y: 4})
  const [direction, setDirection] = useState('Up')

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'Up') {
        const newBlock = { ...block };
        newBlock.y++;
        setBlock(newBlock)
        setTail({ ...block })
      }
      if (direction === 'Down') {
        const newBlock = { ...block };
        newBlock.y--;
        setBlock(newBlock)
        setTail({ ...block })
      }
      if (direction === 'Left') {
        const newBlock = { ...block };
        newBlock.x--;
        setBlock(newBlock)
        setTail({ ...block })
      }
      if (direction === 'Right') {
        const newBlock = { ...block };
        newBlock.x++;
        setBlock(newBlock)
        setTail({ ...block })
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [direction, block])

  useArrowKeys(arrow => {
    if (arrow === ArrowKey.Up) {
      setDirection('Up')
    };
    if (arrow === ArrowKey.Down) {
      setDirection('Down')
    };
    if (arrow === ArrowKey.Left) {
      setDirection('Left')
    };
    if (arrow === ArrowKey.Right) {
      setDirection('Right')
    };
  });

  return (
    <>
      {getGrid().map((p, index) => (
        <Block key={`grid-${index}`} point={p} color="white" />
      ))}
      <Block point={block} color="black" />

      {/* todo just for testing */}
      <Block point={tail} color="green" />
      <Block point={{ x: 4, y: 2 }} color="blue" />
      <Block point={{ x: 10, y: 8 }} color="red" />
    </>
  )
}

export default App
