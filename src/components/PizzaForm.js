import React,{useState} from "react";

function PizzaForm({pizzaForm, setPizzaForm, vegetarianSelection, setVegetarianSelection, pizzas, setPizzas}) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const editingPizza = {
      topping: pizzaForm.topping,
      size: pizzaForm.size,
      vegetarian: vegetarianSelection === "Vegetarian" ? true : false
    }
    fetch(`http://localhost:3001/pizzas/${pizzaForm.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editingPizza),
    })
      .then((res) => res.json())
      .then((updatedPizza) => {
        console.log("Updated Pizza: ", updatedPizza)
        const updatedPizzaList = pizzas.map(pizza => {
          if(pizza.id === updatedPizza.id){
            return updatedPizza
          }
          else{
            return pizza
          }
        })
        setPizzas(updatedPizzaList)
        // pizzas.find(pizza => pizza.id = pizzForm.id)
      })

  }

  const handleFieldChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value)
    setPizzaForm({...pizzaForm, [name]: value})
    console.log(pizzaForm)

  }

  const handleRadioChange = (e) => {
    // setPizzaForm(pizzaForm.vegetarian = true);
    setVegetarianSelection(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleFieldChange}
            value={pizzaForm.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" 
          onChange={handleFieldChange}
          value={pizzaForm.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleRadioChange}
              checked={vegetarianSelection === "Vegetarian"}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleRadioChange}
              checked={vegetarianSelection === "Not Vegetarian"}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
