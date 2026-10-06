const GITHUB_URL = "https://api.github.com/users/SkyGhaf/repos?sort=updated&per_page=6";

function toonReposStatus(tekst) {
    document.querySelector("#repos-status").textContent = tekst;
}

function maakRepoItem(repo) {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.href = repo.html_url;
    link.textContent = repo.name;
    item.appendChild(link);

    if (repo.description) {
        const beschrijving = document.createElement("p");
        beschrijving.textContent = repo.description;
        item.appendChild(beschrijving);
    }

    const info = document.createElement("p");
    const taal = repo.language ?? "onbekende taal";
    const datum = new Date(repo.updated_at).toLocaleDateString("nl-NL");
    info.textContent = `${taal} · bijgewerkt op ${datum}`;
    item.appendChild(info);

    return item;
}

function renderRepos(repos) {
    const lijst = document.querySelector("#repos-lijst");
    lijst.textContent = "";
    repos.forEach((repo) => lijst.appendChild(maakRepoItem(repo)));
}

async function haalReposOp() {
    toonReposStatus("Repositories laden...");

    try {
        const response = await fetch(GITHUB_URL);

        if (!response.ok) {
            throw new Error(`GitHub gaf statuscode ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            toonReposStatus("Er zijn nog geen publieke repositories.");
            return;
        }

        renderRepos(repos);
        toonReposStatus("");
    } catch (error) {
        toonReposStatus("Kon de repositories niet ophalen. Probeer het later opnieuw.");
        console.warn(error);
    }
}

haalReposOp();