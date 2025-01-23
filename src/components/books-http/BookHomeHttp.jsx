import { Outlet } from "react-router-dom";
import { BookHeaderHttp } from "./BookHeaderHttp";
import { AppHeader } from "../AppHeader";

export function BookHomeHttp() {
  return (
    <>
      <AppHeader />
      <BookHeaderHttp></BookHeaderHttp>
      <Outlet></Outlet>
    </>
  );
}
