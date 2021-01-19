import React from "react";
import Button from "./Button";

function Header({ title, onTab, showAddTask }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onTab={onTab}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
