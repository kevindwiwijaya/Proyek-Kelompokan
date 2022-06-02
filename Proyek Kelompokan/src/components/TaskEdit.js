import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [nama, setNama] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date, nama: nama});

    setDesc("");
    setDate("");
    setNama("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          name="nama"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;