let PizzaIngredients = ["muzzarela","harina","agua","sal","levadura","salsa de tomate","aceite","oregano","tomate","salami","ajo"];


function IterateFunction(ingredients) {
    pares = [];
    impares = [];
    for(i = 0;i < ingredients.length; i++){
        if (ingredients[i].length % 2 == 0) {
            pares.push(ingredients[i]);
        }else {
            impares.push(ingredients[i]);
        }
    }  
    return (`Los ingredientes pares son: ${pares}, Los ingredientes impares son: ${impares}`)
}

IterateFunction(PizzaIngredients);
console.log(IterateFunction(PizzaIngredients));