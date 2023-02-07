import React, { useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, setPizzaForm,vegetarianSelection,setVegetarianSelection}) {
  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
        }
        {pizzas.map(pizza => 
        <Pizza key={pizza.id} 
        pizza={pizza}
        setPizzaForm={setPizzaForm} 
        vegetarianSelection={vegetarianSelection}
        setVegetarianSelection={setVegetarianSelection}/>)}
      </tbody>
    </table>
  );
}

export default PizzaList;
