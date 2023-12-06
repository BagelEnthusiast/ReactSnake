import { Block, getGrid } from './Block'

function App() {
  return (
    <>
      {getGrid().map(p => (
        <Block point={p} color="white" />
      ))}
      <Block point={{ x: 2, y: 2}} color="green" />
      <Block point={{ x: 4, y: 2}} color="blue" />
      <Block point={{ x: 5, y: 3}} color="red" />
    </>
  )
}

export default App
