// Variabili essenziali pre-esecuzione
var generaBiglietto = document.getElementById("genera");
console.log(generaBiglietto);
var refreshPagina = document.getElementById("annulla");
console.log(refreshPagina);


// Genera Biglietto
generaBiglietto.addEventListener ('click', 
function appari()  {

        // Nome e Cognome
        var nomeCognome = document.getElementById("nome").value;
        // Km Viaggio
        var kmViaggio = document.getElementById("km").value;

        // Esecuzione per compilazione corretta
        if (isNaN(nomeCognome) && (kmViaggio != 0)) {

            // Visualizza Biglietto
            var bigliettoTreno = document.getElementById("biglietto");
            bigliettoTreno.style.opacity = "1";

            // Nome Passeggero
            nomePasseggero = document.getElementById("passeggero").innerHTML = nomeCognome;            

            // Offerta
            var etaPasseggero = document.getElementById("selezione").value;
            if ((etaPasseggero == (value = "Minorenne")) || (etaPasseggero == (value = "Over 65"))) {
                offertaPrezzo = document.getElementById("sconto").innerHTML = "Sconto " + etaPasseggero;
            }
            else {
                offertaPrezzo = document.getElementById("sconto").innerHTML = etaPasseggero; 
            }

            // Carrozza
            var numeroCarrozza = document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

            // Codice CP
            var numeroCP = document.getElementById("codice_cp").innerHTML = Math.floor(Math.random() * 10000) + 90000;

            // Calcolo prezzo finale
            const tariffaStandard = Math.round(((0.21 * kmViaggio) + Number.EPSILON) * 100) / 100;
            const tariffaYoung = Math.round(((0.21 * kmViaggio * 0.8) + Number.EPSILON) * 100) / 100;
            const tariffaSenior = Math.round(((0.21 * kmViaggio * 0.6) + Number.EPSILON) * 100) / 100;

            if (etaPasseggero == (value = "Maggiorenne")) {
                prezzoFinale = document.getElementById("costo").innerHTML = tariffaStandard + "€";
            }
            else if (etaPasseggero == (value = "Minorenne")) {
                prezzoFinale = document.getElementById("costo").innerHTML = tariffaYoung + "€";
            }
            else {
                prezzoFinale = document.getElementById("costo").innerHTML = tariffaSenior + "€";
            }
        }

        //Campi compilati incorrettamente
        else {
        alert("Compilare correttamente i campi");
        location.reload();
        }
    }
);

// Refresh
refreshPagina.addEventListener ('click',
function refresh() {
    location.reload();
}
);