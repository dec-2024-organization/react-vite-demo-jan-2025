import { useEffect } from "react";

export function FetchDemo() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container m-3">
        <h3>LIST OF USERS</h3>
        
      </div>
    </>
  );
}
