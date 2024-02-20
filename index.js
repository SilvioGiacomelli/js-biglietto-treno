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
////Impostare eta Anziano
else if(eta > 65) {
  alert("Sei Anziano e hai diritto al prezzo ridotto del 40%.")
  prezzoAnziani = prezzoBiglietto * scontoAnziani;
  prezzoBiglietto = prezzoBiglietto - prezzoAnziani;
  console.log(prezzoBiglietto);
}
////Impostare eta maggiorenne
else{
  alert("Sei Maggiorenne e paghi prezzo pieno.")
  console.log(prezzoBiglietto);
}
////Stampo su HTML
  document.getElementById("prezzoTotale").innerHTML += prezzoBiglietto + " €"; 
