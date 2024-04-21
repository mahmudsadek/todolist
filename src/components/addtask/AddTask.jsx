import { useState } from 'react';
import './AddTask.css'

const AddTask = (props) => {
  const [Task,setTask] = useState('soliman');

  return (
    <div className="input-group mb-3">
      <input onChange={e=> setTask(e.target.value)} type="text" className="form-control" id ="input" placeholder="Enter Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn btn-outline-secondary" type="button" id="add" onClick={()=>props.addNewtask(Task)}>Add Task</button>
    </div>
  );  
}

export default AddTask;