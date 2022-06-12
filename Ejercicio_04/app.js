const Pizzas = [
    {id: 1, nombre: "Margarita", ingredientes: ["mozzarella","salsa","albahaca","tomate"],Img: "./images/pizza_Margarita.jpg", precio: 500 },
    {id: 2, nombre:"Cuatro quesos", ingredientes: ["mozzarella","queso azul","parmesano","provolone"],img: "./images/pizza_CuatroQuesos.jpg", precio: 600},
    {id: 3, nombre:"Jamon cocido", ingredientes:["mozzarella","salsa","jamon cocido"],img: "./images/pizza_JamonCocido.jpg", precio: 800},
    {id: 4, nombre:"Hawaiana", ingredientes:["mozzarella","salsa","jamon","piña"],img: "./images/pizza_Hawaiana.jpg", precio: 750},
    {id: 5, nombre:"Champiniones y pepperoni", ingredientes:["mozzarella","champiniones","pepperoni","tomate"],img: "./images/pizza_PeperoniChampinones.jpg", precio: 650},
    {id: 6, nombre:"Albahaca y cherry", ingredientes:["mozzarella","albahaca","tomate cherry"],img:"./images/pizza_AlbahacaCherry.jpg", precio:550},
];

localStorage.setItem("Pizzas", JSON.stringify(Pizzas))

const PizzaCard = document.querySelector(".card");
const PizzaName = document.querySelector(".pizza-name");
const PizzaImage = document.querySelector(".pizza-img");
const PizzaIngredients = document.querySelector(".pizza-ing");
const PizzaPrice = document.querySelector(".price");

const Form = document.querySelector("#ID-form");


function FindID (id) {
    const resultado = Pizzas.find(pizza => pizza.id == id)
    console.log(resultado);

}

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    const ID_Input = document.querySelector("#id-input").value;
    FindID(ID_Input)
})