import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import ListItems from "./components/ListItems";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  const numItems = items.length;
  const numCompleted = items.filter((item) => item.checked).length;
  const percentage = Math.round((numCompleted / numItems) * 100);
  return (
    <div className="app">
      <h1>To Do List</h1>
      <p>
        {items.length === 0
          ? "Start adding some tasks to your list"
          : percentage === 100
          ? "All tasks completed"
          : `You have ${numItems} tasks, and you already completed ${numCompleted} (${percentage}%)`}
      </p>

      <Form onAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
      />
    </div>
  );
}
