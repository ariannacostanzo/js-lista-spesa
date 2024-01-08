// * Creo una lista
const shoppingItems = ['pomodoro','uova','formaggio','succo','prosciutto'];
// * Prendo gli elementi che mi servono dalla pagina
const containerElement = document.querySelector('.container');

let contatore = 0;
let message = '<ul>'

// * Stampo con ciclo while



while (contatore < shoppingItems.length) {
    message += `<li>${shoppingItems[contatore]}<li>`
    contatore++; 
}

message += '<ul>'

containerElement.innerHTML = message;