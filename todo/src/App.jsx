import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './TodoList';

function App() {
  const [task,setTask] = useState("");
 const [todos,setTodos] = useState([]);

  const handleChange = e =>{
    setTask(e.target.value);
  }
  const submitHandle = e=>{
    e.preventDefault();
    // console.log(task)
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }

  const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos)
  }

  return (
    <div className="App">

      
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Todo App</h2>
            <form action="" onSubmit={submitHandle}>
              <input type="text" placeholder='Add Task' value={task} onChange={handleChange}/> &nbsp;
              <input type="submit"  name='Add' value="Add" />
            </form>
            <TodoList todolist={todos} deleteHandler= {deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
