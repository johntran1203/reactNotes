import '../App.css';
import {useState } from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    console.log(todoList)

    const handleChange =(e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        const task ={
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
            taskname: newTask,
            complete: false
        }
        const newTodoList = [...todoList, task]
        setTodoList(newTodoList)
    }

    const deleteTask = (id) => {
        const newTodoList = todoList.filter((task)=> {
            return task.id !==id
        })
        setTodoList(newTodoList)
    }

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            if(task.id === id) {
                return {...task, complete: true} ;
            } else {
                return task;
            }
        }))
    }
    return ( 
        <div>
           <div className="app">
            <div className="addTask">
                <input  onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task, id) => {
                    return (
                        <div key ={id} className='task' style={{backgroundColor: task.complete  ? 'green' :'white'}} >
                            <h1>{task.taskname} {task.id}</h1>
                            <button onClick={()=>deleteTask(task.id)}>X</button>
                            <button onClick={()=>completeTask(task.id)}>COMPLETE</button>
                        </div>
                    )
                        
                    
                })}
               
            </div>
            </div> 
        </div>
     );
}
 
export default Todo;