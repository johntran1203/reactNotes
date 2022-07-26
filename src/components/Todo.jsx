import '../App.css';
import {useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange =(e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        const newTodoList = [...todoList, newTask]
        setTodoList(newTodoList)
    }
    return ( 
        <div>
           <div className="app">
            <div className="addTask">
                <input  onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((todo) => {
                    return <h1>{todo}</h1>
                        
                    
                })}
            </div>
            </div> 
        </div>
     );
}
 
export default Todo;