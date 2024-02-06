import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { comp, deleteTask } from "../redux/action";
import EditTask from "./EditTask";

const TaskCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="parent">
      <h4 className={el.isDone ? "comp" : "uncomp"}>{el.action} </h4>
      <Button
        onClick={() => dispatch(deleteTask(el.id))}
        variant="danger"
        style={{ margin: "25px" }}
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch(comp(el.id))}
        variant={el.isDone ? "secondary" : "success"}
      >
        {el.isDone ? "Undo" : "Complete"}
      </Button>
      <EditTask el={el} />
    </div>
  );
};

export default TaskCard;
