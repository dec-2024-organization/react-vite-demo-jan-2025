export function TodoItem({ item, removeItem, updateItem }) {
  return (
    <>
      <li className="list-group-item">
        {item.todoId}
        {item.todoStatus ? (
          <span
            className="material-symbols-outlined text-success mx-3"
            onClick={() => updateItem(item.todoId)}
          >
            check_circle
          </span>
        ) : (
          <span
            className="material-symbols-outlined text-warning mx-3"
            onClick={() => updateItem(item.todoId)}
          >
            circle
          </span>
        )}
        {item.todoName}
        <button
          type="button"
          className="btn btn-outline-danger btn-sm mx-5"
          onClick={() => removeItem(item.todoId)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </li>
    </>
  );
}
