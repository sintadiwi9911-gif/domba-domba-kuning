// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ANIMASI SCROLL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// FORM
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan terkirim!");
});
