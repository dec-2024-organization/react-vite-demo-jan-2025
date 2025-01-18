function ListCity() {
  let allCities = ["Chennai", "Mumbai", "Pune"];

  let mappedAllCities = allCities.map((eachCity) => (
    <li key={eachCity} className="list-group-item">
      {eachCity}
    </li>
  ));
  return (
    <>
      <h3>List of Cities</h3>
      <div>{allCities}</div>
      <div>
        <ul className="list-group">{mappedAllCities}</ul>
      </div>
    </>
  );
}

export default ListCity;
