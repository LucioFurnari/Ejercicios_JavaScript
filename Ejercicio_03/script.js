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


// let inputValue = inputNumber.value;

function FindID(x) {
    let inputValue = inputNumber.value;
    if(inputValue == x.id){
        console.log(x.id);
        return true 
    } else {
        return false
    }
}

Button.addEventListener("click",()=>{
    Pizzas.map((pizza)=> { 
        if(FindID(pizza)){
            console.log("ID Encontrado");
        }else if(FindID(pizza) == false) {
            console.log("ERROR");
        }
        })
})


// Pizzas.map((pizza)=> { 
//     FindID(pizza)
// })

//Probar doble if, un if que tome el resultado de otro 
//Uno que tome el resultado del forEach 

/////

// Button.addEventListener("click", event => {
//     let inputValue = inputNumber.value;
//     // console.log(inputValue);
//     Pizzas.map((pizza) => {
//         if (inputValue == pizza.id ){
//                 pizzaName.textContent = pizza.nombre;
//                 pizzaPrice.textContent = `${pizza.precio}$`;
//         }else if (inputValue != pizza.id) {
//             console.log("no existe");
//             }
//         });
//     })