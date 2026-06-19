const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background = "#ff6600";
        link.style.color ="#fff";
        link.style.borderRadius = "25px";
        link.style.padding = "8px 16px";
    }
});

const item = document.querySelectorAll(".contact-info p");
items.forEach((item, i) => {
    item.style.opacity = "0";
    item.style.transform = "tranlateX(-20px)";
    item.style.transtion = "all 0.5s ease" +i * 0.15 + "s";
    setTimeout (() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
    },  400);
});