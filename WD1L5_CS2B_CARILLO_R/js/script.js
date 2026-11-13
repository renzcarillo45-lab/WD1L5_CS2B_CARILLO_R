
// =========================================
// RENZ CARILLO - PORTFOLIO JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // AUTOMATIC COPYRIGHT YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // ACTIVE NAVIGATION
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateNavigation() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );

        });

    }

    window.addEventListener("scroll", updateNavigation);
    updateNavigation();


    // CLOSE MOBILE MENU AFTER CLICKING
    const navMenu = document.getElementById("mainNav");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu && navMenu.classList.contains("show")) {

                bootstrap.Collapse.getOrCreateInstance(navMenu).hide();

            }

        });

    });


    // CONTACT FORM - EMAIL CLIENT
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            if (!contactForm.reportValidity()) return;

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // REPLACE WITH YOUR REAL EMAIL
            const receiver = "YOUR-EMAIL@example.com";

            const subject = encodeURIComponent(
                "Portfolio Contact - " + name
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            const mailtoLink =
                `mailto:${receiver}?subject=${subject}&body=${body}`;

            if (feedback) {
                feedback.textContent =
                    "Opening your email application...";
            }

            window.location.href = mailtoLink;

        });

    }

});
