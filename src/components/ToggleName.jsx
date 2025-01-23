import { useEffect, useState } from "react";
import { AppHeader } from "./AppHeader";

let toggleFlag = true;
export function ToggleName() {
  //let dName = "";

  let [dName, setDName] = useState("");

  function displayName() {
    console.log(toggleFlag);
    if (toggleFlag) {
      //dName = "Raj";
      setDName("Raj");
    } else {
      setDName("");
    }
    toggleFlag = !toggleFlag;
    console.log("after : ", toggleFlag);
  }

  return (
    //<div>
    <>
      <AppHeader />
      <h3>Toggle Name Component</h3>
      <button type="button" onClick={displayName}>
        Click
      </button>
      <h5>{dName}</h5>
    </>
    //</div>
  );
}
