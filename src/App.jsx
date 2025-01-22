import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Display from "./components/Display";
import { ToggleName } from "./components/ToggleName";
import { Counter } from "./components/Counter";
import ListCity from "./components/ListCity";
import { ArrayDestructure } from "./components/ArrayDestructure";
import { ObjectDestructure } from "./components/ObjectDestructure";
import { BookList } from "./components/books/BookList";
import { FruitList } from "./components/fruits/FruitList";
import { TodoList } from "./components/todos/TodoList";
import { CaptureTextData } from "./components/CaptureTextData";
import { BookAdd } from "./components/books/BookAdd";
import { BookEdit } from "./components/books/BookEdit";
import { BookHome } from "./components/books/BookHome";
import { ComponentNotFound } from "./components/ComponentNotFound";
import { AppHeader } from "./components/AppHeader";
import { BookListHttp } from "./components/books-http/BookListHttp";
import { BookAddHttp } from "./components/books-http/BookAddHttp";
import { BookEditHttp } from "./components/books-http/BookEditHttp";
import { BookHomeHttp } from "./components/books-http/BookHomeHttp";
import { FetchDemo } from "./components/FetchDemo";
function App() {
  return (
    // <div>
    // <Fragment>
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<FruitList />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/list-city" element={<ListCity />}></Route>
          <Route path="/toggle-name" element={<ToggleName />}></Route>
          <Route path="/todo" element={<TodoList />}></Route>
          <Route path="/fetch-demo" element={<FetchDemo />}></Route>
          <Route path="/book-home" element={<BookHome />}>
            <Route path="book-list" element={<BookList />}></Route>
            <Route path="book-add" element={<BookAdd />}></Route>
            <Route path="book-edit/:bid" element={<BookEdit />}></Route>
          </Route>
          <Route path="/book-home-http" element={<BookHomeHttp />}>
            <Route path="book-list-http" element={<BookListHttp />}></Route>
            <Route path="book-add-http" element={<BookAddHttp />}></Route>
            <Route
              path="book-edit-http/:bid"
              element={<BookEditHttp />}
            ></Route>
          </Route>
          <Route path="*" element={<ComponentNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    //</Fragment>
    // </div>
  );
}

export default App;
