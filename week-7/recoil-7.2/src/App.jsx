// import { useContext, useState } from "react"
// import { CountContext } from "./context"

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenState, filterTodo, filteredTodoList, todoList } from "./store/atoms/count"
import { useState } from "react"

const App = () => {


  return (
    <div>
      <RecoilRoot>
      <Count />
      <EvenCount />
      <TodoList />
      <TodoRenderer />
      <TodoFilter />
      </RecoilRoot>
    </div>
  )

}

const Count =() => {
  return <div>
    <CountRenderer />
    <Buttons />

  </div>
}

const CountRenderer = () => {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>
}

const Buttons = () => {
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {setCount(count => count + 1)}}>Increase</button>
    <button onClick={() => {setCount(count => count - 1)}}>Decrease</button>
  </div>
}

const EvenCount = () => {
  const text = useRecoilValue(evenState)
  return  <p>{text ? 'It is even': null}</p>
}

const TodoList = () => {
  const [todoValue, setTodoValue] = useState({
    title: '',
    description: ''
  })
  const setAtomTodo = useSetRecoilState(todoList)

  const handleSubmit = () => {
    console.log(todoValue)
    setAtomTodo((oldTodo) => [...oldTodo, todoValue])
    setTodoValue({
      title: '',
      description: ''
    })
  }

  return <div>
    <input type="text" value={todoValue.title} onChange={(e) => setTodoValue({...todoValue, title: e.target.value})} placeholder="title" />
    <input type="text" value={todoValue.description} onChange={(e) => setTodoValue({...todoValue, description: e.target.value})} placeholder="description" />
    <button onClick={handleSubmit}>Add</button>
  </div>
}

const TodoRenderer = () => {
  const TodoList = useRecoilValue(filteredTodoList)
  return <div>
    {TodoList.map((todo, index) => (
      <div key={index}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
    ))}
  </div>
}

const TodoFilter = () => {
  const setFilter = useSetRecoilState(filterTodo)

  return <div>
    <input type="text" onChange={(e) => setFilter(e.target.value)} />
  </div>

}

export default App