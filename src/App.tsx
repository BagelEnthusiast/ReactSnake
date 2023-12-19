import { useEffect, useState } from 'react';
import { ArrowKey, useArrowKeys } from './useKeyboard';
import { Block, getGrid } from './Block'
import { Point } from './interfaces'



function App() {
  const [block, setBlock] = useState<Point>({ x: 5, y: 5 });
  const [tailArr, setTailArr] = useState<Point[]>([{x: 5, y: 4}])
  const [apple, setApple] = useState<Point>({ x: 10, y: 8 });
  const [direction, setDirection] = useState('Up')

  useEffect(() => {
    if (block.x === apple.x && block.y === apple.y) {
      console.log('hitting apple')
      const newApple = { ...apple };
      newApple.x = Math.floor(Math.random() * (20 - 1 + 1)) + 1
      newApple.y = Math.floor(Math.random() * (20 - 1 + 1)) + 1
      setApple(newApple)
      const newTailArr = [ ...tailArr ]
      const newTailBlock = { ...tailArr[tailArr.length - 1]}
      
      newTailArr.push(newTailBlock)
      setTailArr([ ...newTailArr ])
    }
  }, [block])

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'Up') {
        const newBlock = { ...block };
        newBlock.y++;
        setBlock(newBlock);
        const newTailArr = tailArr.map(block => {
          block.y++
          return block
        })
        console.log('tail:', JSON.stringify(newTailArr))
        setTailArr([ ...newTailArr ])
      }
      if (direction === 'Down') {
        const newBlock = { ...block };
        newBlock.y--;
        setBlock(newBlock);
        const newTailArr = tailArr.map(block => {
          block.y++
          return block
        })
        console.log('tail:', JSON.stringify(newTailArr))
        setTailArr([ ...newTailArr ])
      }
      if (direction === 'Left') {
        const newBlock = { ...block };
        newBlock.x--;
        setBlock(newBlock);
        const newTailArr = tailArr.map(block => {
          block.y++
          return block
        })
        console.log('tail:', JSON.stringify(newTailArr))
        setTailArr([ ...newTailArr ])
      }
      if (direction === 'Right') {
        const newBlock = { ...block };
        newBlock.x++;
        setBlock(newBlock);
        const newTailArr = tailArr.map(block => {
          block.y++
          return block
        })
        console.log('tail:', JSON.stringify(newTailArr))
        setTailArr([ ...newTailArr ])
      }
    }, 500);
  
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
      {tailArr.map(b => {
        <Block point={b} color="green" />
      })}
      <Block point={{ x: 4, y: 2 }} color="blue" />
      <Block point={apple} color="red" />
    </>
  )
}

export default App
