import React, {useContext} from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    //contextTodo
    const {todos} = useContext(TodoContext)
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo = {todo}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos