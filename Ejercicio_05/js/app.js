import { Pizzas } from "./db.js";
import { createCard } from "./card.js";

const searchForm = document.querySelector(".search-pizza"),
    searchInput = document.querySelector(".search-input"),
    emptyMessage = document.querySelector(".empty-input");
////////
localStorage.setItem("Pizzas",JSON.stringify(Pizzas));
const PizzaArray = JSON.parse(localStorage.getItem("Pizzas"));
console.log(PizzaArray);
PizzaArray.map(pizza => createCard(pizza));
////////
const cards = document.querySelectorAll(".item");
console.log(cards[0].childNodes[3].textContent);
console.log(cards.item(1));


searchForm.addEventListener("submit" ,(e) => {
    e.preventDefault()
    let input = searchInput.value.toLowerCase();
    console.log(input);
    if(input == ""){
        emptyMessage.classList.add("empty-input-active");
    }

    cards.forEach(card => {
        card.classList.add("hide");
        if(card.childNodes[3].textContent.toLowerCase() == input){
            card.classList.toggle("hide");
        }
    })
})