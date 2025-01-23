import { Fragment } from "react";
import { AppHeader } from "./AppHeader";

function Display() {
  let movieName = "Wakanda Forever";
  return (
    //<Fragment>
    <>
      <AppHeader />
      <h2>Display Component</h2>
      <h3>Movie Name : {movieName}</h3>
      <input type="text" value={movieName} />
    </>
    //</Fragment>
    // <div>
    // </div>
  );
}
export default Display;
