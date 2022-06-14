const Pizzas = [
    {id: 1, nombre: "Margarita", ingredientes: ["Mozzarella","Salsa","Albahaca","Tomate"],img: "./images/pizza_Margarita.jpg", precio: 500 },
    {id: 2, nombre:"Cuatro quesos", ingredientes: ["Mozzarella","Queso azul","Parmesano","Provolone"],img: "./images/pizza_CuatroQuesos.jpg", precio: 600},
    {id: 3, nombre:"Jamon cocido", ingredientes:["Mozzarella","Salsa","Jamon cocido"],img: "./images/pizza_JamonCocido.jpg", precio: 800},
    {id: 4, nombre:"Hawaiana", ingredientes:["Mozzarella","Salsa","Jamon","Piña"],img: "./images/pizza_hawaiana.jpg", precio: 750},
    {id: 5, nombre:"Champiniones y pepperoni", ingredientes:["Mozzarella","Champiniones","Pepperoni","Tomate"],img: "./images/pizza_PeperoniChampinones.jpg", precio: 650},
    {id: 6, nombre:"Albahaca y cherry", ingredientes:["Mozzarella","Albahaca","Tomate cherry"],img:"./images/pizza_AlbahacaCherry.jpg", precio:550},
];

localStorage.setItem("Pizzas", JSON.stringify(Pizzas))

const CardContainer = document.querySelector(".card-container")
const PizzaCard = document.querySelector(".card");
const PizzaName = document.querySelector(".pizza-name");
const PizzaImage = document.querySelector(".pizza-img");
const PizzaIngredients = document.querySelector(".pizza-ing");
const PizzaPrice = document.querySelector(".price");

const Form = document.querySelector("#ID-form");

const ErrorMessage = document.querySelector(".error");
const InputEmpty = document.createElement("span");
CardContainer.appendChild(InputEmpty);

function FindID (id) {
    const resultado = Pizzas.find(pizza => pizza.id == id)
    if (resultado){
        console.log(resultado);
        PizzaName.textContent = resultado.nombre;
        PizzaImage.setAttribute("src", resultado.img);
        PizzaIngredients.innerHTML = "";
        resultado.ingredientes.map(ing => {
            const list = document.createElement("li");
            list.textContent = `- ${ing}`;
            PizzaIngredients.appendChild(list);
        })
        PizzaPrice.textContent = `${resultado.precio} $`;
        ErrorMessage.classList.add("error-delete");
        ErrorMessage.classList.remove("error-message");
        ErrorMessage.textContent = "";
    }else if (typeof resultado === "undefined"){
        PizzaName.textContent = "";
        PizzaImage.setAttribute("src", "");
        PizzaIngredients.textContent = "";
        PizzaPrice.textContent = "";
        ErrorMessage.textContent = "ID NO ENCONTRADO";
        ErrorMessage.classList.remove("error-delete");
        ErrorMessage.classList.add("error-message");
        console.log("ID NO ENCONTRADO");
    }
    

}

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    const ID_Input = document.querySelector("#id-input").value;
    if(ID_Input == ""){
        InputEmpty.textContent = "No deje el campo vacio";
        InputEmpty.classList.add("empty-input-ms");
        InputEmpty.classList.remove("empty-input-ms-delete");
        console.log("No deje el campo vacio");
    }else{
        InputEmpty.classList.add("empty-input-ms-delete");
        InputEmpty.classList.remove("empty-input-ms");
        FindID(ID_Input)
        console.log(ID_Input);
    }
})