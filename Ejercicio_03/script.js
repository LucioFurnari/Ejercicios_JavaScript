const Pizzas = [
    {id: 1, nombre: "Margarita", ingredientes: ["mozzarella","albahaca","tomate"], precio: 500 },
    {id: 2, nombre:"Cuatro quesos", ingredientes: ["mozzarella","queso azul","parmesano","provolone"], precio: 600},
    {id: 3, nombre:"Jamon y panceta", ingredientes:["mozzarella","jamon","panceta"], precio: 800},
    {id: 4, nombre:"Hawaiana", ingredientes:["mozzarella","jamon","piña"], precio: 750},
    {id: 5, nombre:"Champiniones y pepperoni", ingredientes:["mozzarella","champiniones","pepperoni","tomate"], precio: 650},
    {id: 6, nombre:"Albahaca y cherry", ingredientes:["mozzarella","albahaca","tomate cherry"], precio:550},
];

const inputNumber = document.querySelector("input");
const Button = document.querySelector("button");
const pizzaName = document.querySelector("h2");
const pizzaPrice = document.querySelector("h4");

const errorAlert = document.createElement("h2");
const card = document.querySelector(".card");
// card.appendChild(errorAlert);   
// card.insertBefore(errorAlert,pizzaName)

Button.addEventListener("click", ()=> {
    let inputValue = inputNumber.value;
    const found = Pizzas.find(pizza => {if(pizza.id == inputValue){return true}})

    if(found){
        console.log("Id encontrado");
        pizzaName.textContent = found.nombre;
        pizzaPrice.textContent = `$${found.precio}`;
        pizzaName.style.visibility = "visible";
        pizzaPrice.style.visibility = "visible";   
        card.replaceChild(pizzaName,errorAlert)   
        errorAlert.classList.add("cardError")
    }else if (found == undefined){
        errorAlert.textContent = "No existe pizza con ese ID"; 
        // card.insertBefore(errorAlert,pizzaName);
        // card.appendChild(errorAlert)
        card.replaceChild(errorAlert,pizzaName)
        errorAlert.classList.remove("cardError")                  
        pizzaName.style.visibility = "hidden";
        pizzaPrice.style.visibility = "hidden";
        console.log("ERROR");
    }
})
