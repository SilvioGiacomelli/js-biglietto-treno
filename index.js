let eta = prompt("Inserisci la tua età");

const etaMinorenni = 17;
const etaMaggiorenni = 18;
const etaAnziani = 65;
const prezzoKm = 0.21;

if (eta < etaMaggiorenni) {
  alert("Sei Minorenne e hai diritto al prezzo ridotto del 20%.");
} else if (eta > etaMinorenni && eta < etaAnziani) {
  alert("Sei Maggiorenne e paghi prezzo pieno.");
} else if (eta >= etaMaggiorenni) {
  alert("Sei Anziano e hai diritto al prezzo ridotto del 40%.");
}


console.log(eta);


const kmViaggio = prompt("Quanti km devi fare?");

console.log(kmViaggio);


const prezzoBiglietto = kmViaggio * prezzoKm;


