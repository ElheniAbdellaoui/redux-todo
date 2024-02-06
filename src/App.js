import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import EditTask from "./component/EditTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
