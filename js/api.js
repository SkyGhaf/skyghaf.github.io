const GITHUB_URL = "https://api.github.com/users/SkyGhaf/repos?sort=updated";

function maakRepoItem(repo) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.textContent = repo.name;
    item.appendChild(link);
    return item;
}

async function haalReposOp() {
    const status = document.querySelector("#repos-status");
    const lijst = document.querySelector("#repos-lijst");

    status.textContent = "Repositories laden...";

    try {
        const response = await fetch(GITHUB_URL);
        const repos = await response.json();

        repos.forEach((repo) => lijst.appendChild(maakRepoItem(repo)));
        status.textContent = "";
    } catch (error) {
        status.textContent = "Kon de repositories niet ophalen. Probeer het later opnieuw.";
    }
}

haalReposOp();