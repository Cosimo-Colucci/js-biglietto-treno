const distanceOfTicket = parseInt (prompt('scrivi la distanza del tuo viaggio in km'));
const userAge = prompt('scrivi la tua eta');
const priceOfTicket = 0.21

console.log(distanceOfTicket * priceOfTicket) ;

document.getElementById('price').innerHTML = (distanceOfTicket * priceOfTicket) ;