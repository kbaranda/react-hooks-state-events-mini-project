import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {

  return (
    <div className="tasks">
      {tasks.map((task) => { 
        return(
        <Task 
        key={task.id} 
        text={task.text} 
        category={task.category}
        handleDelete={() => handleDelete(task.id)}
        />
        )
      })}
    </div>
  );
}

export default TaskList;
