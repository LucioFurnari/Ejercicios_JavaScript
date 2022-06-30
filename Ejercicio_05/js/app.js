import { Pizzas } from "./db.js";
import { createCard } from "./card.js";

const searchForm = document.querySelector(".search-pizza");
const searchInput = document.querySelector(".search-input");
////////
localStorage.setItem("Pizzas",JSON.stringify(Pizzas));
const PizzaArray = JSON.parse(localStorage.getItem("Pizzas"));
console.log(PizzaArray);
// PizzaArray.map(pizza => createCard(pizza));

searchForm.addEventListener("submit" ,(e) => {
    e.preventDefault()
    let input = searchInput.value
    console.log(input);
    let name = PizzaArray.find(elem => elem.nombre == input);
    console.log(name);
})