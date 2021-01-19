import React from "react";

function Button({ text, color, onTab }) {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onTab}>
      {text}
    </button>
  );
}

export default Button;
