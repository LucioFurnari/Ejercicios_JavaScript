import { Pizzas } from "./db.js";
import { createCard } from "./card.js";

const searchForm = document.querySelector(".search-pizza"),
    searchInput = document.querySelector(".search-input"),
    emptyMessage = document.querySelector(".empty-input"),
    cleanBtn = document.querySelector(".clean-button");

////////Crea Cards//////
localStorage.setItem("Pizzas",JSON.stringify(Pizzas));
const PizzaArray = JSON.parse(localStorage.getItem("Pizzas"));
// console.log(PizzaArray);
PizzaArray.map(pizza => createCard(pizza));
const cards = document.querySelectorAll(".item");//Captura cards ya creadas
// console.log(cards[0].childNodes[3].textContent);
// console.log(cards.item(1));
//////////

cleanBtn.classList.add("clean-button-hide");

searchForm.addEventListener("submit" ,(e) => {
    e.preventDefault()
    let input = searchInput.value.toLowerCase();
    // console.log(input);
    if(input == ""){
        emptyMessage.classList.add("empty-input-active");
    }else {
        emptyMessage.classList.remove("empty-input-active");
        cleanBtn.classList.remove("clean-button-hide");

        cards.forEach(card => {
            card.classList.add("item-hide");
            if(card.childNodes[3].textContent.toLowerCase() == input){
                card.classList.toggle("item-hide");
            }
        })
        cleanBtn.addEventListener("click",() => {
            cards.forEach(card => {
                card.classList.remove("item-hide");
            })
        })
    }
})