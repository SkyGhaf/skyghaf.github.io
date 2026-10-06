const velden = [
    { id: "naam", boodschap: "Vul je naam in (minimaal 2 tekens)." },
    { id: "email", boodschap: "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl." },
    { id: "bericht", boodschap: "Schrijf een bericht van minimaal 10 tekens." },
];

function valideerVeld(veld) {
    const input = document.querySelector(`#${veld.id}`);
    const foutmelding = document.querySelector(`#${veld.id}-error`);
    const geldig = input.checkValidity() && input.value.trim() !== "";

    input.setAttribute("aria-invalid", String(!geldig));
    foutmelding.textContent = geldig ? "" : veld.boodschap;
    return geldig;
}

function valideerFormulier() {
    return velden.map(valideerVeld).every(Boolean);
}

function toonStatus(tekst) {
    document.querySelector("#form-status").textContent = tekst;
}

function verwerkVerzending(event) {
    event.preventDefault();

    if (!valideerFormulier()) {
        toonStatus("Er zijn nog fouten in het formulier.");
        return;
    }

    toonStatus("Bedankt! Je bericht is verzonden.");
    event.target.reset();
}

document.querySelector("#contact-form").addEventListener("submit", verwerkVerzending);

velden.forEach((veld) => {
    document.querySelector(`#${veld.id}`).addEventListener("blur", () => valideerVeld(veld));
});