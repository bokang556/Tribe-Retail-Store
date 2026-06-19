const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background = "#ff6600";
        link.style.color = "#fff";
        link.style.borderRadius ="25px";
        link.style.padding = " 8px 16px"; 
    }
});

 const cards = document.querySelectorAll("service-card");
 cards.forEach((card, i) => {
    card.style.opacity ="0";
    card.style.transform = "translateY(40px)";
    card.style.transition ="all 0.6s ease " +i * 0.2 + "s";
    setTimeout(() => {
        card.style.opacity ="1";
        card.style.transform = "translateY(0)";
    }, 300);
 });

 cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left -rect.width / 2;
        card.style.transform = "rotateY(" + x / 20 + "deg) translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0) translateY(0)";
    });
 });