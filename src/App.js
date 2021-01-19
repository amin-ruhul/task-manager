import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task-1",
      date: "19-jan-2021",
    },
    {
      id: 2,
      title: "task-2",
      date: "19-jan-2021",
    },
    {
      id: 3,
      title: "task-3",
      date: "19-jan-2021",
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
