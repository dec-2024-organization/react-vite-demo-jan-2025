export function ArrayDestructure() {
  let allNames = ["John", "Jane", "Jack", "Jill"];
  let name1 = allNames[0];
  let name2 = allNames[1];
  let name3 = allNames[2];
  let name4 = allNames[3];

  let [name11, name22, name33, name44] = allNames; // array destructuring
  return (
    <>
      <h2>Array Destructure Demo</h2>
      <h3>List of Names...</h3>
      <p>{name1}</p>
      <p>{name2}</p>
      <p>{name3}</p>
      <p>{name4}</p>
      <h3>List of Names by destructuring the array...</h3>
      <p>{name11}</p>
      <p>{name22}</p>
      <p>{name33}</p>
      <p>{name44}</p>
    </>
  );
}
