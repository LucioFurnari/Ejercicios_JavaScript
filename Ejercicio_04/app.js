const Pizzas = [
    {id: 1, nombre: "Margarita", ingredientes: ["mozzarella","salsa","albahaca","tomate"], precio: 500 },
    {id: 2, nombre:"Cuatro quesos", ingredientes: ["mozzarella","queso azul","parmesano","provolone"], precio: 600},
    {id: 3, nombre:"Jamon cocido", ingredientes:["mozzarella","salsa","jamon cocido"], precio: 800},
    {id: 4, nombre:"Hawaiana", ingredientes:["mozzarella","salsa","jamon","piña"], precio: 750},
    {id: 5, nombre:"Champiniones y pepperoni", ingredientes:["mozzarella","champiniones","pepperoni","tomate"], precio: 650},
    {id: 6, nombre:"Albahaca y cherry", ingredientes:["mozzarella","albahaca","tomate cherry"], precio:550},
];

localStorage.setItem("Pizzas", JSON.stringify(Pizzas))