const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background ="#ff6600";
        link.style.color = "#fff";
        link.style.borderRadius = "25px";
        link.style.padding = "8px 16px";
    }
});

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            if (email && ! email.value.includes("@")) {
                email.style.borderColor ="red";
                alert("Please enter a valid email!");
                return;
            }
            form.style.transform = "scale(0.98)";
            setTimeout(() => {
                form.style.transform = "scale(1)";
                alert("Thank you! Your enquiry has been sent");
                form.reset();
            }, 200);
        });

     form.querySelectorAll("input, textarea, select").forEach(input => {
        input.addEventListener("focus", () => {
            input.style.boxShadow =" 0 0 0 4px rgba (255,102,0,0.2)";
        });
        input.addEventListener("blur", () => {
            input.style.boxShadow = "none";
        });
     });
  }