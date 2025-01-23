import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { AppHeader } from "../AppHeader";

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

  let [filteredTodos, setFilteredTodos] = useState(allTodos);
  let [filterText, setFilterText] = useState("");

  let mappedAllTodos = filteredTodos.map((todo) => (
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
    setFilteredTodos(filteredTodos);
    setFilterText("");
  }

  function handleAdd(e) {
    setNewTodo({
      todoId: allTodos[allTodos.length - 1].todoId + 1,
      todoName: e.target.value,
      todoStatus: false,
    });
  }

  function handleFilterChange(event) {
    setFilterText(event.target.value);
    let filteredTodos = allTodos.filter((todo) =>
      todo.todoName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  }

  function addTodo() {
    setAllTodos([...allTodos, newTodo]);
    setFilteredTodos([...allTodos, newTodo]);
    setNewTodo({
      todoId: 0,
      todoName: "",
      todoStatus: false,
    });
  }

  return (
    <>
      <AppHeader />
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
        <div className="d-flex justify-content-between">
          <h5>My Todo List</h5>
          <h5>Total Todos : {allTodos.length}</h5>
        </div>
        <div className="form-control-group mx-5 my-2 p-3 bg-info">
          <label htmlFor="filterId" className="form-label">
            Filter By Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="filterId"
            placeholder="Enter search string"
            value={filterText}
            onChange={(event) => handleFilterChange(event)}
          />
        </div>
        {allTodos.length == 0 ? (
          <div className="text-danger">Todo List is empty!</div>
        ) : (
          <ul className="list-group">{mappedAllTodos}</ul>
        )}
      </div>
    </>
  );
}
