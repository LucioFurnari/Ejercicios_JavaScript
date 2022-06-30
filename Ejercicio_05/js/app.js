import { Pizzas } from "./db.js";
import {createCard } from "./card.js";

localStorage.setItem("Pizzas",JSON.stringify(Pizzas));

const PizzaArray = JSON.parse(localStorage.getItem("Pizzas"));
console.log(PizzaArray);
PizzaArray.map(pizza => createCard(pizza));