const Pizzas = [
    {id: 1, nombre: "Margarita", ingredientes: ["mozzarella","albahaca","tomate"], precio: 500 },
    {id: 2, nombre:"Cuatro quesos", ingredientes: ["mozzarella","queso azul","parmesano","provolone"], precio: 600},
    {id: 3, nombre:"Jamon y panceta", ingredientes:["mozzarella","jamon","panceta"], precio: 800},
    {id: 4, nombre:"Hawaiana", ingredientes:["mozzarella","jamon","piña"], precio: 750},
    {id: 5, nombre:"Champiniones y pepperoni", ingredientes:["mozzarella","champiniones","pepperoni","tomate"], precio: 650},
    {id: 6, nombre:"Albahaca y cherry", ingredientes:["mozzarella","albahaca","tomate cherry"], precio:550},
];


for (i = 0; i < Pizzas.length; i++){
    if (Pizzas[i].id % 2 != 0){
        console.log("Las pizzas con id impar son: " + Pizzas[i].nombre, "ID: " + Pizzas[i].id);
    }else if (Pizzas[i].precio < 600){
        console.log("La pizza " + Pizzas[i].nombre, "tiene un valor de: "+Pizzas[i].precio);
    }  
}



for(x =0;x< Pizzas.length;x++){
    console.log("Tenemos pizza "+Pizzas[x].nombre, "y cuesta "+Pizzas[x].precio);
}


