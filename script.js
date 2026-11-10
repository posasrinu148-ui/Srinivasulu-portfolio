

// MOBILE NAVIGATION

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// CLOSE MENU AFTER CLICK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// TYPING ANIMATION

const typingText = document.getElementById("typing");

const roles = [
    "Software Developer",
    "Java Programmer",
    "Backend Developer",
    "Problem Solver"
];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingText.textContent =
        currentRole.substring(0, charIndex);


    let speed = deleting ? 50 : 100;


    if (!deleting && charIndex === currentRole.length) {

        deleting = true;

        speed = 1200;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// SCROLL REVEAL ANIMATION

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});
