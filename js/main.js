// * Creo una lista
const shoppingItems = ['pomodoro','uova','formaggio','succo','prosciutto', 'lattuga', 'patatine surgelate'];
// * Prendo gli elementi che mi servono dalla pagina
const containerElement = document.querySelector('.container-lista');

let contatore = 0;
let message = '<ul>'

// * Stampo con ciclo while

while (contatore < shoppingItems.length) {
    message += `<li>${shoppingItems[contatore]}<li><hr>`
    contatore++; 
}

// ? Fatto con ciclo for -----------------------------

// for (let i = 0; i < shoppingItems.length; i++) {
//     message += `<li>${shoppingItems[contatore]}<li>`
// }

// ? ----------------------------------------------------


message += '<ul>'

containerElement.innerHTML = message;