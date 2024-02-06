import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks } = useSelector((state) => state);
  console.log(tasks);
  return (
    <div>
      {tasks.map((el) => (
        <TaskCard el={el} key={el.id} />
      ))}
    </div>
  );
};

export default TaskList;
