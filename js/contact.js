const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
const naam = document.querySelector("#naam");
const email = document.querySelector("#email");
const bericht = document.querySelector("#bericht");
const naamFout = document.querySelector("#naam-error");
const emailFout = document.querySelector("#email-error");
const berichtFout = document.querySelector("#bericht-error");

function valideerVeld(veld, foutElement, foutTekst) {
    if (veld.checkValidity()) {
        foutElement.textContent = "";
        veld.setAttribute("aria-invalid", "false");
        return true;
    } else {
        foutElement.textContent = foutTekst;
        veld.setAttribute("aria-invalid", "true");
        return false;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const naamGoed = valideerVeld(naam, naamFout, "Vul je naam in (minimaal 2 tekens).");
    const emailGoed = valideerVeld(email, emailFout, "Vul een geldig e-mailadres in.");
    const berichtGoed = valideerVeld(bericht, berichtFout, "Schrijf een bericht van minimaal 10 tekens.");

    if (naamGoed && emailGoed && berichtGoed) {
        status.textContent = "Bedankt! Je bericht is verzonden.";
        form.reset();
    } else {
        status.textContent = "Er zijn nog fouten in het formulier.";
    }
});