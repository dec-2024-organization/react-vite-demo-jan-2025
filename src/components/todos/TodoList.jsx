import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  let [newTodo, setNewTodo] = useState({
    todoId: 0,
    todoName: "",
    todoStatus: false,
  });
  let [allTodos, setAllTodos] = useState([
    {
      todoId: 1,
      todoName: "Learn React",
      todoStatus: false,
    },
    {
      todoId: 2,
      todoName: "Learn Angular",
      todoStatus: false,
    },
  ]);

  let mappedAllTodos = allTodos.map((todo) => (
    <TodoItem
      key={todo.todoId}
      item={todo}
      removeItem={(itemId) => deleteItem(itemId)}
      updateItem={(itemId) => editItem(itemId)}
    />
  ));

  function editItem(itemId) {
    let updatedTodos = allTodos.map((todo) => {
      if (todo.todoId == itemId) {
        todo.todoStatus = !todo.todoStatus;
      }
      return todo;
    });
    setAllTodos(updatedTodos);
  }

  function deleteItem(itemId) {
    let filteredTodos = allTodos.filter((todo) => todo.todoId != itemId);
    setAllTodos(filteredTodos);
  }

  function handleAdd(e) {
    setNewTodo({
      todoId: allTodos[allTodos.length - 1].todoId + 1,
      todoName: e.target.value,
      todoStatus: false,
    });
  }
  function addTodo() {
    setAllTodos([...allTodos, newTodo]);
    setNewTodo({
      todoId: 0,
      todoName: "",
      todoStatus: false,
    });
  }
  return (
    <>
      <div className="container m-5">
        <h1 className="text-center">TODO APP</h1>
        <div className="form-control-group my-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Name"
            value={newTodo.todoName}
            onChange={(e) => handleAdd(e)}
          />
        </div>
        <div className="d-grid my-2">
          <button
            className="btn btn-success btn-block btn-sm"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <h5>My Todo List</h5>
        <h6>Total Todos : {allTodos.length}</h6>
        {allTodos.length == 0 ? (
          <div className="text-danger">Todo List is empty!</div>
        ) : (
          <ul className="list-group">{mappedAllTodos}</ul>
        )}
      </div>
    </>
  );
}
