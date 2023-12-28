export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  const message =
    totalItems === 0
      ? "Your packing list is empty."
      : `You have ${totalItems} item${
          totalItems !== 1 ? "s" : ""
        } on your list, and you already packed ${packedItems} item${
          packedItems !== 1 ? "s" : ""
        }.`;

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
}
