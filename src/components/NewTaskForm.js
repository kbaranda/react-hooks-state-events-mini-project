import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code",
  })

  let text = newTask.text;
  let category = newTask.category

  function handleChange(event){
    let id = 7
    let name = event.target.name
    let value = event.target.value
    setNewTask({
      ...newTask,
      [name]: value,
      id: id++
    })
  }

  function handleOnTaskFormSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(newTask)
    setNewTask({
      text: "",
      category: "Code"
    })
  }

  return (
    <form onSubmit={handleOnTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input
        type="text"
        name="text"
        onChange={handleChange}
        value={text}
        />
      </label>
      <label>
        Category
        <select
        name="category"
        onChange={handleChange}
        value={category}
        >
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input
      type="submit"
      value="Add task"
      
      />
    </form>
  );
}

export default NewTaskForm;
