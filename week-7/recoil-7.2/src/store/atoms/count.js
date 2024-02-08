import {atom, selector} from 'recoil'

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const evenState = selector({
    key: "evenState",
    get: ({get}) => {
        const currentCount = get(countAtom)
        return currentCount % 2 ==0
    }
})

export const todoList = atom({
    key: 'todoList',
    default: [],
})

export const filterTodo = atom({
    key: 'filterTodo',
    default: '',
})

export const filteredTodoList = selector({
    key: 'filteredTodoList',
    get: ({get}) => {
        const filter = get(filterTodo)
        const list = get(todoList)

        return list.filter((todo) => todo.title.toLowerCase().includes(filter.toLowerCase()) || todo.description.toLowerCase().includes(filter.toLowerCase()) )
    }
})

