import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/display">
                Display
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-city">
                List City
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toggle-name">
                Toggle Name
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Fruit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-home-http">
                Book Http
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fetch-demo">
                Fetch Demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
