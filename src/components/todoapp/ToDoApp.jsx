import { useEffect, useState } from 'react';
import './ToDoApp.css'
import AddTask from '../addtask/AddTask';
import Tasks from '../tasks/Tasks';

const ToDoApp = () => {
  const [Task,setTasks] = useState([]);

  const addtask  = (text) => {
    const task = {
      id:Date.now(),
      text:text,
      isCompleted:false
    }
    setTasks([...Task,task])
  }

  const deleteTask = (id) => {
    let tempTask = Task.filter((task) => {
      return task.id !== id;
    })
    setTasks(tempTask);
  }

  const markDone = (id) => {
    const tempTask = Task.map((t) => {
      if(t.id === id)
        return {...t, isCompleted:true}
      return t
    })
    setTasks(tempTask);
    console.log(tempTask);
  }


  return (
    <div className='container text-center'>
      <AddTask addNewtask = {addtask} />
      <div className='card mt-5'>
        <div className='mt-3'></div>
        {
          Task.map(task => {
            return(
              <div key={task.id}>
                <Tasks id={task.id} text={task.text}  remove = {deleteTask} MarksDone = {markDone} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ToDoApp;