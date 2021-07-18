import { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

interface NewTaskFormProps {
  handleCreateNewTask: (title: string) => void;
}

function NewTaskForm({ handleCreateNewTask }: NewTaskFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Adicionar novo todo"
        onChange={(e) => setNewTaskTitle(e.target.value)}
        value={newTaskTitle}
      />
      <button
        type="submit"
        data-testid="add-task-button"
        onClick={() => {
          handleCreateNewTask(newTaskTitle);
          setNewTaskTitle("");
        }}
      >
        <FiCheckSquare size={16} color="#fff" />
      </button>
    </div>
  );
}

export default NewTaskForm;
