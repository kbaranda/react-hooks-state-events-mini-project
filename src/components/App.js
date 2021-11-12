import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories] = useState(CATEGORIES)
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setCategory] = useState("All")

  let displayedTasks = [...tasks]

  if (selectedCategory !== "All") {
    displayedTasks = tasks.filter((task) => {
      return task.category === selectedCategory
    })
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) =>task.id !== id)
    setTasks(newTasks)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={categories}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
       />
      <NewTaskForm 
      categories={categories}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      tasks={displayedTasks} 
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
