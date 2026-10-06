function toggleBlogpost(knop) {
    const inhoud = document.querySelector(`#${knop.getAttribute("aria-controls")}`);
    const isOpen = knop.getAttribute("aria-expanded") === "true";

    knop.setAttribute("aria-expanded", String(!isOpen));
    inhoud.hidden = isOpen;
    knop.textContent = isOpen ? "Lees meer" : "Lees minder";
}

document.querySelectorAll(".uitklap-knop").forEach((knop) => {
    knop.addEventListener("click", () => toggleBlogpost(knop));
});