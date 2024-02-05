import { useContext, useState } from "react"
import { CountContext } from "./context"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
      <Count />
      </CountContext.Provider>
    </div>
  )

}

const Count =() => {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />

  </div>
}

const CountRenderer = () => {
  const {count, setCount} = useContext(CountContext)
  return <div>{count}</div>
}

const Buttons = () => {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => {setCount(count + 1)}}>Increase</button>
    <button onClick={() => {setCount(count - 1)}}>Decrease</button>
  </div>
}

export default App