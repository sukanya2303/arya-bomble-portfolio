/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
    }

});


/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/*=========================================
    STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(10,10,10,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(13,13,13,.75)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
    ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
    REVEAL ON SCROLL
=========================================*/

const revealElements = document.querySelectorAll(

    ".card, .skill-card, .timeline-item, .project-card, .film-card, .achievement-card, .edu-card"

);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/*=========================================
    SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.createElement("div");

scrollBtn.className = "scroll-top";

scrollBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    }

    else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
    PARALLAX HERO GLOW
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", e => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.backgroundPosition =
        `${x * 30}px ${y * 30}px`;

});


/*=========================================
    PROFILE IMAGE TILT
=========================================*/

const image = document.querySelector(".image-circle");

if (image) {

    image.addEventListener("mousemove", (e) => {

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 18;
        const rotateX = ((y / rect.height) - .5) * -18;

        image.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = `
            perspective(800px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

}


/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn, .btn-outline").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".35s";

    });

});


/*=========================================
    PRELOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*=========================================
    OPTIONAL FOOTER YEAR
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Arya Bomble`;

}