import './App.css';
import { useState } from "react"

function App() {
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

//for changing inputs
const handleChange = (event) => {
   setNewTask(event.target.value);
};

// for add input task after click button
const addTask = () => {

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    setTodoList([...todoList, task]);
};

// for remove task
const deleteTask = (id) => {
  const newTodoList = todoList.filter((task) =>{
      if (task.id === id) {
        return false;
      }else{
        return true;
      }
  });

  setTodoList(newTodoList);
};


  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button className='add' onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return( 
            <div> 
              <h1>{task.taskName}</h1>
              <button onClick={ () => deleteTask(task.id)}> X </button> 
            
            </div>
          
          );
        })}
      </div>
    </div>
  );
}

export default App;
