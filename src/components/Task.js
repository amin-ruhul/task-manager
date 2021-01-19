import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onReminder }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
