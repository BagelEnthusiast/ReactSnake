import { useState } from 'react';
import { ArrowKey, useArrowKeys } from './useKeyboard';
import { Block, getGrid } from './Block'
import { Point } from './interfaces'



function App() {
  const [block, setBlock] = useState<Point>({ x: 5, y: 5 });
  const [tail, setTail] = useState<Point>({x: 5, y: 4})
  useArrowKeys(arrow => {
    if (arrow === ArrowKey.Up) {
      setTail({ ...block })
      const newBlock = { ...block };
      newBlock.y++;
      setBlock(newBlock)
    };
    if (arrow === ArrowKey.Down) {
      setTail(t => {
        console.log('setting tail')
        console.log('block coords: ', `${block.x}, ${block.y}`)
        const newTail = { ...t };
        newTail.x = block.x;
        newTail.y = block.y;
        return newTail
      })
      setBlock(b => { 
        console.log('hitting set block')
        const newBlock = { ...b };
        newBlock.y--;
        return newBlock;
      });
    };
    if (arrow === ArrowKey.Left) {
      setTail(t => {
        const newTail = { ...t };
        newTail.x = block.x;
        newTail.y = block.y;
        return newTail
      })
      setBlock(b => { 
        const newBlock = { ...b };
        newBlock.x--;
        return newBlock;
      });
    };
    if (arrow === ArrowKey.Right) {
      setTail(t => {
        const newTail = { ...t };
        newTail.x = block.x;
        newTail.y = block.y;
        return newTail
      })
      setBlock(b => { 
        const newBlock = { ...b };
        newBlock.x++;
        return newBlock;
      });
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
