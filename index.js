
////Quanti anni hai?
let eta = prompt("Inserisci la tua età");
////Quanti km devi percorrere?
const kmViaggio = prompt("Quanti km devi fare?");
////Prezzo biglietto
const prezzoKm = 0.21;
let prezzoBiglietto = kmViaggio * prezzoKm;
////Costanti sconti
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
////Impostare sconto eta minorenne
if(eta < 17) {
  alert("Sei Minorenne e hai diritto al prezzo ridotto del 20%.")
  prezzoMinorenni = prezzoBiglietto * scontoMinorenni;
  prezzoBiglietto = prezzoBiglietto - prezzoMinorenni;
  console.log(prezzoBiglietto);
}
////Impostare eta maggiorenne
if(eta > 18) {
  alert("Sei Maggiorenne e paghi prezzo pieno.")
  console.log(prezzoBiglietto);
}
////Impostare eta Anziano
if(eta > 65) {
  alert("Sei Anziano e hai diritto al prezzo ridotto del 40%.")
  prezzoAnziani = prezzoBiglietto * scontoAnziani;
  prezzoBiglietto = prezzoBiglietto - prezzoAnziani;
  console.log(prezzoBiglietto);
}



// console.log(kmViaggio, eta);

// document.getElementById("prezzoTotale").innerHTML +=
// //html--------------------------------
// `
// ${prezzoBiglietto}&#8364;
// `;
// //------------------------------------------


