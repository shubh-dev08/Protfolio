// === Scroll-triggered fade-in for sections ===
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const options = {
        threshold: 0.15,
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section) => {
        fadeInOnScroll.observe(section);
    });

    // === Hamburger Menu Functionality ===
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Optional: Hide the menu when a link is clicked
        // This is good for mobile user experience
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

// === Smooth scrolling for internal nav links ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});