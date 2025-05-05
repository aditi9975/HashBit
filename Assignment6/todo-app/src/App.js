import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { text: task.trim(), done: false };
    setTasks([...tasks, newTask].sort((a, b) => a.text.localeCompare(b.text)));
    setTask("");
  };

  // Toggle task completion
  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  // Delete task
  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Edit task
  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "not_done") return !task.done;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded mb-4 w-full" onClick={addTask}>
        Add Task
      </button>

      <div className="flex justify-between mb-3">
        <span>Total Tasks: {tasks.length}</span>
        <span>Done: {tasks.filter((t) => t.done).length}</span>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")} className="border px-2 py-1 rounded">
          Show All
        </button>
        <button onClick={() => setFilter("done")} className="border px-2 py-1 rounded">
          Show Done
        </button>
        <button onClick={() => setFilter("not_done")} className="border px-2 py-1 rounded">
          Show Not Done
        </button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border rounded mb-2 ${
              task.done ? "bg-green-100 line-through" : ""
            }`}
          >
            <input
              className="flex-1 bg-transparent border-none"
              type="text"
              value={task.text}
              onChange={(e) => editTask(index, e.target.value)}
              disabled={task.done}
            />
            <div className="flex items-center gap-2">
              <button onClick={() => toggleDone(index)} title="Toggle Done">
                {task.done ? "✅" : "⬜"}
              </button>
              <button onClick={() => removeTask(index)} title="Delete" className="text-red-500">
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
