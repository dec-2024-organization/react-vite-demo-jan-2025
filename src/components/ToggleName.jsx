export function ToggleName() {
  let dName = "";
  function displayName() {
    dName = "Raj";
    alert(dName);
  }

  return (
    //<div>
    <>
      <h3>Toggle Name Component</h3>
      <button type="button" onClick={displayName}>
        Click
      </button>
      <h5>{dName}</h5>
    </>
    //</div>
  );
}
