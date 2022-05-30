import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = (props) => {
    //props
    const todo = props.todo;
    
    //contextTheme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light, dark} = theme;
    const style = isLightTheme ? light : dark;
    
    //contextTodo
    const {deleteTodos} = useContext(TodoContext)
    
    return (
        <li style={style}
            onClick={() => deleteTodos(todo.id)} >
            {todo.title}
        </li>
    )
}

export default TodoItem