import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
const TodoForm = () => {
    //props

    //state
    const [title, setTitle] = useState('')
    
    //contextTheme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light, dark} = theme;
    const style = isLightTheme ? light : dark;
    
    //contextTodo
    const {addTodos} = useContext(TodoContext)
    
    const handlesubmit = (e) => {
        e.preventDefault();
        addTodos({
            id: uuidv4(),
            title: title
        })
        setTitle('')
    }
    return (
        <form onSubmit={handlesubmit}>
            <input 
                type="text" name="title" placeholder='Enter a new todo......'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="Add" style={style}/>
        </form>
    )
}

export default TodoForm