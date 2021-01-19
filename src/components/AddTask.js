import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("please add a task");
      return;
    }
    onAdd({ title, date, reminder });
    setTitle("");
    setDate("");
    setReminder(false);
  };

  return (
    <form action="" className="add-form" onSubmit={handelSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          placeholder="Enter say & time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
