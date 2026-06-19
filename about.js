const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background = "#ff6600";
        link.style.color ="#fff";
        link.stle.borderRadius = "25px";
        link.style.padding = "8px 16px";
    }
});

const img = document.querySelector("section img");
if (img) {
    img.style.transition ="transform 0.4s ease";
    img.addEventListener("mouseenter", () => {
        img.style.transform= "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
}