// Variabili essenziali pre-esecuzione
var bigliettoTreno = document.getElementById("biglietto");
console.log(bigliettoTreno)
var generaBiglietto = document.getElementById("genera");
console.log(generaBiglietto);
var refreshPagina = document.getElementById("annulla");
console.log(refreshPagina);


// Genera Biglietto
generaBiglietto.addEventListener ('click', 
function appari()  {
    bigliettoTreno.style.display = "block";

    // Nome
    var nome = document.getElementById("nome").value;
    if (isNaN(nome)) {
    nomePasseggero = document.getElementById("passeggero").innerHTML = nome;
    }
    else {
        alert("Non utilizzare valori numerici per Nome e Cognome");
        location.reload();
    }

    // Offerta
    var etaPasseggero = document.getElementById("selezione").value;
    if (etaPasseggero == (value = "Minorenne")) {
        offertaPrezzo = document.getElementById("sconto").innerHTML = "Sconto " + etaPasseggero;
    }
    else if (etaPasseggero == (value = "Over 65")) {
        offertaPrezzo = document.getElementById("sconto").innerHTML = "Sconto " + etaPasseggero;
    }
    else {
        offertaPrezzo = document.getElementById("sconto").innerHTML = etaPasseggero; 
    }

    // Carrozza
    var numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

    // Codice CP
    var numeroCarrozza = document.getElementById("codice_cp").innerHTML = Math.floor(Math.random() * 10000) + 90000;

    // Calcolo prezzo finale
    
    var kmViaggio = document.getElementById("km").value; //Questa variabile si trova qui cosicchè le constanti ne acquisiscano il valore a seguito di input dall'utete.

    // Costanti
    const tariffaStandard = Math.round(((0.21 * kmViaggio) + Number.EPSILON) * 100) / 100;
    const tariffaYoung = Math.round(((0.21 * kmViaggio * 0.8) + Number.EPSILON) * 100) / 100;
    const tariffaSenior = Math.round(((0.21 * kmViaggio * 0.6) + Number.EPSILON) * 100) / 100;

    if (etaPasseggero == (value = "Maggiorenne")) {
        prezzoFinale = tariffaStandard;
    }
    else if (etaPasseggero == (value = "Minorenne")) {
        prezzoFinale = tariffaYoung;
    }
    else {
        prezzoFinale = tariffaSenior;
    }
    var costoViaggio = document.getElementById("costo").innerHTML = prezzoFinale + "€";
}
);

// Refresh
refreshPagina.addEventListener ('click',
function refresh() {
    location.reload();
}
);