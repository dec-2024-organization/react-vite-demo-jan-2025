import { Fragment } from "react";

function Display() {
  let movieName = "Wakanda Forever";
  return (
    //<Fragment>
    <>
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
