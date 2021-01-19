import Task from "./Task";

function Tasks({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={() => onDelete(task.id)} />
      ))}
    </>
  );
}

export default Tasks;
