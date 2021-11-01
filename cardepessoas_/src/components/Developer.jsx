import "./styles.css";

function Developer({ name, age, country }) {
  return (
    <div>
      <div className="userCard">
        <h3> Dev: {name} </h3>
        <h3> Idade: {age} </h3>
        <h3> País: {country} </h3>
      </div>
    </div>
  );
}

export default Developer;
