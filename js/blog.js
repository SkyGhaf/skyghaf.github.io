const knoppen = document.querySelectorAll(".uitklap-knop");

function toggleBlogpost(knop) {
    const tekst = document.querySelector("#" + knop.getAttribute("aria-controls"));

    if (tekst.hidden) {
        tekst.hidden = false;
        knop.textContent = "Lees minder";
        knop.setAttribute("aria-expanded", "true");
    } else {
        tekst.hidden = true;
        knop.textContent = "Lees meer";
        knop.setAttribute("aria-expanded", "false");
    }
}

knoppen.forEach((knop) => {
    knop.addEventListener("click", () => toggleBlogpost(knop));
});