/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* Close menu when link is clicked (mobile UX improvement) */

document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

/* =========================
   CONTACT FORM HANDLER
========================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const email = this.querySelector("input[type='email']").value;
    const message = this.querySelector("textarea").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Fake success response (frontend only)
    alert(`Thanks ${name}! Your message has been sent successfully.`);

    this.reset();
});

/* =========================
   SMOOTH SCROLL ENHANCEMENT (optional extra)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});