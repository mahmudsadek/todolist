import { useState } from "react";
import "./Task.css";

const Tasks = (props) => {
  const[done,setDone] = useState(false);
	return (
		<div className="taskContainer" id="tasks" style={{ padding: "2%" }}>
			<div className="card mb-3" data-id={1713694886663}>
				<div className="card-body text-start d-flex">
					<span className="px-2" style={{textDecoration:done ? "line-through":"none"}}>
            {props.text} 
          </span>
					<div style={{ position: "sticky", left: "80%" }}>
            <button
              className="btn btn-success mx-2"
              id={props.id}
              //style={{ position: "sticky", left: "58%" }}
              onClick={(e) => {  
                props.MarksDone(props.id);
                setDone(true);
                e.target.disabled = true;
              }}
            > 
              done
            </button>
            <button
              className="btn btn-danger"
              id={props.id}
              //style={{ position: "sticky", left: "80%" }}
              onClick={() => {
                props.remove(props.id);
              }}
            >
              Delete
            </button>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Tasks;
