
const container = document.querySelector(".container-card");

export function createCard(elem) {
    const card = document.createElement("div");
    card.classList.add("item");
    let ingredients = elem.ingredientes;
    // console.log(ingredients);
    card.innerHTML = `
        <img src=${elem.img}>
        <h2>${elem.nombre}</h2>
        <p>Ingredientes: </p>
        <ul>${ingredients.map(i => `<li>- ${i}</li>`).join('')}</ul>
        <span>${elem.precio} $</span>
        `;
    container.appendChild(card);
}
