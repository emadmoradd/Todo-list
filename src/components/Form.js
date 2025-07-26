import { useState } from "react";

export default function Form({ onAddItems, onDeleteItems }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, checked: false };
    onAddItems(newItem);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What do you want to do?"
      />
      <button className="addBtn">+</button>
    </form>
  );
}
