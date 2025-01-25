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
import { Login } from "./components/login/Login";
import { Logout } from "./components/login/Logout";
import SportsList from "./components/sports/SportsList";
import CounterRedux from "./components/counter-redux/CounterRedux";
import { Provider } from "react-redux";
import store from "./components/counter-redux/store";
function App() {
  return (
    // <div>
    // <Fragment>
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/fruit-list" element={<FruitList />}></Route>
            <Route path="/sports-list" element={<SportsList />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/counter-redux" element={<CounterRedux />}></Route>
            <Route path="/list-city" element={<ListCity />}></Route>
            <Route path="/toggle-name" element={<ToggleName />}></Route>
            <Route path="/todo" element={<TodoList />}></Route>
            <Route path="/fetch-demo" element={<FetchDemo />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
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
      </Provider>
    </>

    //</Fragment>
    // </div>
  );
}

export default App;
