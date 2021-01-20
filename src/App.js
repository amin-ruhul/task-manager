import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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
  const handelAdd = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
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
      <Header
        onTab={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={handelAdd} />}
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
