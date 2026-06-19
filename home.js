const currentPage = window.location.pathname.split("/").pop() || "home.html";
document.querySelectorAll ("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background ="#ff6600";
        link.style.color = "#fff";
        link.style.borderRadius = "25px";
        link.style.padding = "8px 16px";
    }
});

const shopBtn = document.getElementById("shopBtn");
if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        window.location.href = "services.html"
    });
}

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity ="1";
            entry.target.style.transform ="translateY(0)";
        }
    });
});
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition ="all 0.8s ease";
    observer.observe(sec);
});