
const container = document.querySelector(".container-card");

export function createCard(elem) {
    const card = document.createElement("div");
    let ingredients = elem.ingredientes;
    card.innerHTML = `
        <img src:"${elem.img}">
        <h2>${elem.nombre}</h2>
        <ul>${ingredients.map(i => `<li>${i}</li>`)}</ul>
        `;
    container.appendChild(card);
}