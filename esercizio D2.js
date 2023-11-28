/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 5;
let numero2 = 10;

// Trovare il numero maggiore
if (numero1 > numero2) {
  console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
  console.log("Il numero maggiore è: " + numero2);
} else {
  console.log("I numeri sono uguali.");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero = 10000000.89765;

if (numero !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroooo = 15;

if (numero % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numeroo1 = 3;
let numeroo2 = 5;

if (numero1 === 8 || numero2 === 8) {
  console.log("Il valore di uno dei numeri è 8.");
} else if (
  numeroo1 + numero2 === 8 ||
  numeroo1 - numero2 === 8 ||
  numeroo2 - numero1 === 8
) {
  console.log("L'addizione/sottrazione dei numeri è uguale a 8.");
} else {
  console.log("Nessuna delle condizioni è soddisfatta.");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50;

let shippingCost = 10;

if (totalShoppingCart > 60) {
  let totalAmount = totalShoppingCart;
  console.log(
    "Totale da addebitare: " + totalAmount + " (Spedizione gratuita)"
  );
} else {
  let totalAmount = totalShoppingCart + shippingCost;
  console.log(
    "Totale da addebitare: " +
      totalAmount +
      " (Costo spedizione: " +
      shippingCost +
      ")"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let prezzo_base = 100.0;

// Controllo se è il Black Friday (supponiamo che sia True oggi)
let black_friday = true;

// Calcolo lo sconto del 20% se è il Black Friday
let sconto_black_friday = black_friday ? 0.2 * prezzo_base : 0.0;

// Calcolo il prezzo scontato
let prezzo_scontato = prezzo_base - sconto_black_friday;

// Calcolo il totale, considerando lo sconto del Black Friday
let totale = prezzo_scontato;

// Controllo se il totale supera una certa soglia per ottenere la spedizione gratuita
let soglia_spedizione_gratuita = 200.0; // Soglia di 200 euro per spedizione gratuita

let spedizione_gratuita = totale > soglia_spedizione_gratuita;

// console.log del "prezzo base", "Sconto Black Friday", "Prezzo scontato", "Totale"
console.log("Prezzo base: " + prezzo_base + " euro");
console.log("Sconto Black Friday: " + sconto_black_friday + " euro");
console.log("Prezzo scontato: " + prezzo_scontato + " euro");
console.log("Totale: " + totale + " euro");

// La spedizione è gratuita
if (spedizione_gratuita) {
  console.log("Spedizione gratuita!");
} else {
  console.log("Spedizione a pagamento.");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// Assegnazioni dei valori numerici alle variabili
let number1 = 25;
let number2 = 15;
let number3 = 30;

let numeri = [number1, number2, number3];

numeri.sort(function (a, b) {
  return b - a;
});

let [resultNumber1, resultNumber2, resultNumber3] = numeri;

console.log(
  "Ordine decrescente: " +
    resultNumber1 +
    ", " +
    resultNumber2 +
    ", " +
    resultNumber3
);

//* Ho googlato
let a = "topo";
let b = "zebra";
let c = "gatto";

// Metti le variabili in un array
let arrayVariabili = [a, b, c];

// Ordina l'array in ordine alfabetico
arrayVariabili.sort();

// Estrai i valori ordinati
let [risultatoA, risultatoB, risultatoC] = arrayVariabili;

// Mostra il risultato in console
console.log(
  "Ordine alfabetico: " + risultatoA + ", " + risultatoB + ", " + risultatoC
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valoreletterale = "42";
if (typeof valoreletterale === "number") {
  console.log("Il valore fornito è un numero.");
} else {
  console.log("Il valore fornito non è un numero.");
}

let valorenumero = 42;
if (typeof valorenumero === "number") {
  console.log("Il valore fornito è un numero.");
} else {
  console.log("Il valore fornito non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numerobase = 7;

if (numerobase % 2 === 0) {
  console.log("il numero base è pari ");
} else {
  console.log("il numero base è dispari");
}

let numerobase2 = 10;

if (numerobase % 1 === 0) {
  console.log("il numero base è pari ");
} else {
  console.log("il numero base è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

//  proprietà "city" con il valore "Toronto"
me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const me1 = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

delete me1.lastName;

console.log(me1);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me2 = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

// Rimuovi l'ultimo elemento della proprietà "skills"
me2.skills.pop(0);

console.log(me2);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* SCRIVI QUI LA TUA RISPOSTA */
/* SCRIVI QUI LA TUA RISPOSTA */
