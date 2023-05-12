const distanceOfTicket = parseInt (prompt('scrivi la distanza del tuo viaggio in km'));
const userAge = parseInt (prompt('scrivi la tua eta'));
const priceOfKm = 0.21;
const priceOfTicket = priceOfKm * distanceOfTicket;
const price20Discount = (20 / 100) * priceOfTicket;
const price20Scouted = priceOfTicket - price20Discount;
const price40Discount = (40 / 100) * priceOfTicket;
const price40Scouted = priceOfTicket - price40Discount;



if (userAge < 18) {
    document.getElementById('price').innerHTML += (price20Scouted.toFixed(2)) ;

} else if (userAge > 40) {
    document.getElementById('price').innerHTML += (price40Scouted.toFixed(2)) ;

} else document.getElementById('price').innerHTML += (priceOfTicket.toFixed(2)) ;
