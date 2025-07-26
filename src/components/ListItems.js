import { useState } from "react";
import Item from "./Item";

export default function ListItems({ items, onDeleteItems, onToggleItems }) {
  function handleClick() {
    onDeleteItems();
  }
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItems={onDeleteItems}
          onToggleItems={onToggleItems}
        />
      ))}
    </ul>
  );
}
