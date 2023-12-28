export default function Item({
  item,
  handleRemoveItem,
  handlePackedToggle,
  handleUpdateItem,
}) {
  return (
    <li>
      <input type="checkbox" onClick={() => handlePackedToggle(item.id)} />
      <span>{item.quantity}</span>
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        onBlur={(e) => handleUpdateItem(item.id, e.target.innerText)}
      >
        {" "}
        {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item)}>❌</button>
    </li>
  );
}
