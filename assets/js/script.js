console.log("Script is ingeladen")
 
function uitvoeren() {
    let voornaam = document.getElementById("voornaam");
    let achternaam = document.getElementById("achternaam");
    let straatnaam = document.getElementById("straatnaam");
    let huisnummer = document.getElementById("huisnummer");

    console.log(voornaam.value.length > 0 && achternaam.value.length > 0 && straatnaam.value.length > 0 && huisnummer.value.length > 0);
 
    if (voornaam.value.length > 0 && achternaam.value.length > 0 && straatnaam.value.length > 0 && huisnummer.value.length > 0) {
        
 
        if (isNaN(huisnummer.value)) {
            alert("Vul een nummer in!");
        }
    }
    else {
 
        alert("Vul alle velden in");
    }
}