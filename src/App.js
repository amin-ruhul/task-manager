import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const server_data = await fetchData();
      setTasks(server_data);
    };
    getTask();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const handelAdd = async (task) => {
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };
  const handelDelete = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handelReminder = async (id) => {
    const taskToReminder = await fetchTask(id);
    const updateTask = {
      ...taskToReminder,
      reminder: !taskToReminder.reminder,
    };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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
