
/*  Istruzioni
Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)
Buon viaggio e confermate lettura come al solito.*/



const numeroChilometri = Number(prompt('quanti km vuoi percorrere?'));
const etaPasseggero = Number(prompt('quanti anni hai?'));
let prezzoTicketNonScontato = numeroChilometri*0.21;
if (etaPasseggero<18){
prezzoTicketNonScontato -= prezzoTicketNonScontato*20/100;
} else if(etaPasseggero>65){
    prezzoTicketNonScontato -= prezzoTicketNonScontato*40/100; 
} 

alert(`il costo del bigliotto è di €: ${prezzoTicketNonScontato.toFixed(2)} euro`);
document.getElementById('spesa').innerHTML = `il costo del bigliotto è di €: ${prezzoTicketNonScontato.toFixed(2)} euro`; 
