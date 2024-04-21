import logo from './logo.svg';
import './App.css';
import AddTask from './components/addtask/AddTask';
import ToDoApp from './components/todoapp/ToDoApp';

function App() {
  return (
    <div className="container my-5 w-50">
        <ToDoApp />
    </div>
  );
}

export default App;
