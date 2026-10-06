const projecten = [
    {
        titel: "FloraVeiling",
        beschrijving: "Bloemenveiling applicatie met Nederlands veilingklok systeem - de prijs begint hoog en daalt automatisch totdat iemand koopt.",
        categorie: "Web",
        jaar: 2025,
        github: "https://github.com/GRamdjiawan/Veiling-klok.git",
    },
    {
        titel: "LLM ai prototype",
        beschrijving: "Een AI-agent die hotelgasten via een gesprek helpt de perfecte kamer te vinden.",
        categorie: "AI",
        jaar: 2026,
        github: "https://github.com/SkyGhaf/LLM-ai-prototype.git",
    },
    {
        titel: "Scrum Escape",
        beschrijving: "Een speelse manier(escape room) om de principes, rollen en processen van het Scrum-framework te leren of te testen. Spelers moeten opdrachten en puzzels over Scrum oplossen om stapsgewijs te 'ontsnappen'.",
        categorie: "Spel",
        jaar: 2026,
        github: "https://github.com/soudshoorn/scrum-escape",
        afbeelding: "img/ScrumEscape.jpeg",
        alt: "foto van de groep toen we een prijs hadden gewonnen",
    },
];

function maakProjectKaart(project) {
    const kaart = document.createElement("article");

    const titel = document.createElement("h3");
    titel.textContent = project.titel;
    kaart.appendChild(titel);

    const beschrijving = document.createElement("p");
    beschrijving.textContent = project.beschrijving;
    kaart.appendChild(beschrijving);

        if (project.afbeelding) {
        const afbeelding = document.createElement("img");
        afbeelding.src = project.afbeelding;
        afbeelding.alt = project.alt;
        afbeelding.width = 300;
        afbeelding.height = 200;
        kaart.appendChild(afbeelding);
    }

    const link = document.createElement("a");
    link.href = project.github;
    link.textContent = "Bekijk op GitHub";
    kaart.appendChild(link);

    return kaart;
}

function renderProjecten(lijst) {
    const container = document.querySelector("#projecten-lijst");
    container.textContent = "";

    lijst.forEach((project) => {
        container.appendChild(maakProjectKaart(project));
    });
}

renderProjecten(projecten);

function filterProjecten(categorie) {
    if (categorie === "Alle") {
        return projecten;
    }
    return projecten.filter((project) => project.categorie === categorie);
}

function zetActieveKnop(actieveKnop) {
    document.querySelectorAll(".filters button").forEach((knop) => {
        knop.setAttribute("aria-pressed", String(knop === actieveKnop));
    });
}

document.querySelectorAll(".filters button").forEach((knop) => {
    knop.addEventListener("click", () => {
        renderProjecten(filterProjecten(knop.dataset.categorie));
        zetActieveKnop(knop);
    });
});