import { useState } from "react";
import { v4 as uuid } from "uuid";

import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

import "../styles/tasklist.scss";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(title: string) {
    const id: string = uuid();
    if (!title) return alert("Esqueceu a tarefa?");
    const newTask: Task = { id, title, isComplete: false };
    setTasks([...tasks, newTask]);
  }

  function handleToggleTaskCompletion(id: string) {
    const obj = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(obj);
  }

  function handleRemoveTask(id: string) {
    const tasksArr = [...tasks];
    const taskPosition = tasksArr.filter((task) => task.id !== id);
    setTasks(taskPosition);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <NewTaskForm handleCreateNewTask={handleCreateNewTask} />
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleToggleTaskCompletion={handleToggleTaskCompletion}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}
