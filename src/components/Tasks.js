import Task from "./Task";

function Tasks({ tasks, onDelete, onReminder }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onReminder={onReminder}
        />
      ))}
    </>
  );
}

export default Tasks;
