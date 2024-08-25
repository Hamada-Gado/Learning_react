import { useState } from "react";
import Task from "./Task";

export default function Tasks({ tasks, setTasks }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    setTasks((tasks) => [enteredTask, ...tasks]);
    setEnteredTask("");
  }

  function handleDeleteTask(index) {
    setTasks((tasks) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
          onChange={handleChange}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      {tasks.length !== 0 ? (
        <ul className="p-4 mt-8 bg-stone-100">
          {tasks.map((task, index) => (
            <Task
              key={index}
              liKey={index}
              task={task}
              handleDeleteTask={() => handleDeleteTask(index)}
            />
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
}
