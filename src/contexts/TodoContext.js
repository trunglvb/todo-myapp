import React, {createContext, useState, useEffect} from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])   
    const addTodos = (todo) => {
       setTodos([...todos, todo]);
    }
    const deleteTodos = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    useEffect(() => {
        console.log('getting todo')
        const todos = localStorage.getItem('todos')
        if(todos) setTodos(JSON.parse(todos))
    },[])

    
    useEffect(() => {
        console.log('saving todo')
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const dataTodoContext = {
        todos,
        addTodos,
        deleteTodos
    }

    return (
        <TodoContext.Provider value={dataTodoContext}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider