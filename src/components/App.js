import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  // const [selectedPizza, setSelectedPizza] = useState(null)
  const [pizzaForm, setPizzaForm] = useState({
    topping: "",
    size: "",
  })
  const [vegetarianSelection, setVegetarianSelection] = useState(null)
  useEffect(()=>{
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((pizzaData) => setPizzas(pizzaData))
      .then((result) => console.log("Success: ",result))
      .catch((err) => console.log("Error: ",err))
  },[])
  return (
    <>
      <Header />
      <PizzaForm pizzaForm={pizzaForm} 
      setPizzaForm={setPizzaForm} 
      vegetarianSelection={vegetarianSelection} 
      setVegetarianSelection={setVegetarianSelection}
      pizzas={pizzas}
      setPizzas={setPizzas}/>
      <PizzaList pizzas={pizzas} setPizzaForm={setPizzaForm} vegetarianSelection={vegetarianSelection} setVegetarianSelection={setVegetarianSelection}/>
    </>
  );
}

export default App;
