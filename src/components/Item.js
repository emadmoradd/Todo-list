export default function Item({ item, onDeleteItems, onToggleItems }) {
  function handleClick() {
    onDeleteItems(item.id);
  }
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.checked}
        onClick={() => onToggleItems(item.id)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button className="closeBtn" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}
