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
    nomePasseggero = document.getElementById("passeggero").innerHTML = nome;

    // Offerta
    var etaPasseggero = document.getElementById("selezione").value;
    offertaPrezzo = document.getElementById("sconto").innerHTML = "Sconto " + etaPasseggero;

    // Carrozza
    var numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

    // Codice CP
    var numeroCarrozza = document.getElementById("codice_cp").innerHTML = Math.floor(Math.random(90000) * 100000);

    // Calcolo prezzo finale
    var kmViaggio = document.getElementById("km").value;
    // Costanti
    const tariffaStandard = 0.21 * kmViaggio;
    const tariffaYoung = (0.21 * kmViaggio) * 0.8;
    const tariffaSenior = (0.21 * kmViaggio) * 0.6;
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