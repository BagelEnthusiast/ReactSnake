import { useState } from 'react';
import { ArrowKey, useArrowKeys } from './useKeyboard';
import { Block, getGrid } from './Block'
import { Point } from './interfaces'

function App() {
  const [block, setBlock] = useState<Point>({ x: 5, y: 5 });
  useArrowKeys(arrow => {
    if (arrow === ArrowKey.Up) {
      setBlock(b => { 
        const newBlock = { ...b };
        newBlock.y++;
        return newBlock;
      });
    };
  });

  return (
    <>
      {getGrid().map(p => (
        <Block point={p} color="white" />
      ))}
      <Block point={block} color="black" />

      {/* todo just for testing */}
      <Block point={{ x: 2, y: 2 }} color="green" />
      <Block point={{ x: 4, y: 2 }} color="blue" />
      <Block point={{ x: 5, y: 3 }} color="red" />
    </>
  )
}

export default App
