import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <h3>
        {task.title}
        <FaTimes style={{ color: "red" }} onClick={onDelete} />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
