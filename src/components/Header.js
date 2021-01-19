import React from "react";
import Button from "./Button";

function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
