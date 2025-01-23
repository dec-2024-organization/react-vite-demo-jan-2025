import { Outlet } from "react-router-dom";
import { BookHeader } from "./BookHeader";
import { AppHeader } from "../AppHeader";

export function BookHome() {
  return (
    <>
      <AppHeader />
      <BookHeader></BookHeader>
      <Outlet></Outlet>
    </>
  );
}
