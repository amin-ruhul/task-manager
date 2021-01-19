import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task-1",
      date: "19-jan-2021",
      reminder: true,
    },
    {
      id: 2,
      title: "task-2",
      date: "19-jan-2021",
      reminder: true,
    },
    {
      id: 3,
      title: "task-3",
      date: "19-jan-2021",
      reminder: true,
    },
  ]);
  const handelDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handelReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handelDelete}
          onReminder={handelReminder}
        />
      ) : (
        "Empty.."
      )}
    </div>
  );
}

export default App;
