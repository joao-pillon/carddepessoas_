import './App.css';
import Developer from "./components/Developer";

function App() {
  
  const users = [
    {name: "Rivaldo", age: 34, country: "Brasil"},
    {name: "Ronaldo", age: 29, country: "Brasil"},
    {name: "Zidane", age: 42, country: "França"}
  ] 
  
  return (
    <div className="App">
      <header className="App-header">
   <Developer name={users[0].name} age={users[0].age} country={users[0].country}></Developer>
   <Developer name={users[1].name} age={users[1].age} country={users[1].country}></Developer>
   <Developer name={users[2].name} age={users[2].age} country={users[2].country}></Developer>
      </header>
    </div>
  );
}

export default App;
