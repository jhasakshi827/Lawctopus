/* ==========================================
   COUNTDOWN TIMER
========================================== */

// Set your next batch date here
const batchDate = new Date("July 01, 2026 23:59:59").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = batchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minEl = document.getElementById("minutes");
    const secEl = document.getElementById("seconds");

    if (dayEl) dayEl.innerText = days;
    if (hourEl) hourEl.innerText = hours;
    if (minEl) minEl.innerText = minutes;
    if (secEl) secEl.innerText = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        if (dayEl) dayEl.innerText = "00";
        if (hourEl) hourEl.innerText = "00";
        if (minEl) minEl.innerText = "00";
        if (secEl) secEl.innerText = "00";
    }

}, 1000);


/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach((faq) => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/* ==========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Guard against bare "#" links (e.g. the pricing card's CTA placeholder)
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .testimonial-card, .roadmap-item, .outcome-item, .trust-item, .mentor-card, .benefit-card, .pricing-card"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

/* ==========================================
   PREMIUM HEADER ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(
    ".btn-primary"
);

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle =
            document.createElement("span");

        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

        const radius = diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX -
            this.getBoundingClientRect().left -
            radius}px`;

        circle.style.top =
            `${e.clientY -
            this.getBoundingClientRect().top -
            radius}px`;

        circle.classList.add("ripple");

        const ripple =
            this.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});


/* ==========================================
   COURSE SEATS COUNTER + LIVE ENROLLMENT TOAST
   ------------------------------------------
   ⚠️ HEADS UP: these two blocks simulate urgency/social proof
   with a hardcoded seat number and randomly-generated fake names.
   They are NOT connected to real enrollment data.

   Set SHOW_URGENCY_WIDGETS to false to disable both instantly,
   or replace the static numbers/names with a real data source
   (e.g. fetched from your backend) when you're ready.
========================================== */

const SHOW_URGENCY_WIDGETS = true;

if (SHOW_URGENCY_WIDGETS) {

    const pricingCard =
        document.querySelector(".pricing-card");

    if (pricingCard) {

        const seats = document.createElement("div");

        seats.classList.add("seat-counter");

        seats.innerHTML =
            `
            <strong>🔥 Only 27 Seats Left</strong>
            <p>High demand enrollment this week</p>
            `;

        pricingCard.insertBefore(
            seats,
            pricingCard.children[1]
        );

    }

    const names = [
        "Aarav",
        "Priya",
        "Rohan",
        "Ananya",
        "Karan",
        "Neha",
        "Aditya",
        "Sneha"
    ];

    function showNotification() {

        const notification =
            document.createElement("div");

        notification.className =
            "live-notification";

        const randomName =
            names[
            Math.floor(
                Math.random() * names.length
            )
            ];

        notification.innerHTML =
            `
            🎉 ${randomName} enrolled in the course
            `;

        document.body.appendChild(
            notification
        );

        setTimeout(() => {

            notification.classList.add(
                "visible"
            );

        }, 300);

        setTimeout(() => {

            notification.classList.remove(
                "visible"
            );

            setTimeout(() => {

                notification.remove();

            }, 500);

        }, 4000);

    }

    setInterval(
        showNotification,
        15000
    );

}


/* ==========================================
   HERO CTA TRACKING
========================================== */

const ctaButtons =
    document.querySelectorAll(
        ".btn-primary"
    );

ctaButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            console.log(
                "CTA Clicked"
            );

        }
    );

});


/* ==========================================
   READING PROGRESS BAR
========================================== */

const progressBar =
    document.createElement("div");

progressBar.classList.add(
    "progress-bar"
);

document.body.appendChild(
    progressBar
);

window.addEventListener(
    "scroll",
    () => {

        const winScroll =
            document.documentElement
                .scrollTop;

        const height =
            document.documentElement
                .scrollHeight -
            document.documentElement
                .clientHeight;

        const scrolled = height > 0
            ? (winScroll / height) * 100
            : 0;

        progressBar.style.width =
            scrolled + "%";

    }
);


/* ==========================================
   ACTIVE SECTION HIGHLIGHT
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navAnchors =
    document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 150
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });

        navAnchors.forEach(link => {

            link.classList.toggle(
                "active-link",
                link.getAttribute("href") === `#${current}`
            );

        });

    }
);


/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.createElement("div");

        loader.className =
            "page-loaded";

        document.body.appendChild(
            loader
        );

        setTimeout(() => {

            loader.remove();

        }, 500);

    }
);


/* ==========================
APP DOWNLOAD POPUP
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const popup =
            document.getElementById("appPopup");

        if (popup) {
            popup.classList.add("active");
        }

    }, 3000);

});

const closePopup =
    document.getElementById("closePopup");

if (closePopup) {

    closePopup.addEventListener("click", () => {

        const popup = document.getElementById("appPopup");

        if (popup) {
            popup.classList.remove("active");
        }

    });

}

/* ==========================
MOBILE MENU
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            menuToggle.classList.toggle("active");
            mobileMenu.classList.toggle("active");

        });

        document.querySelectorAll(".mobile-menu a").forEach(link => {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");
                mobileMenu.classList.remove("active");

            });

        });

    }

});

/*=========================================
DELIVERABLE COUNTER
=========================================*/

const deliverableCounters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.4});

deliverableCounters.forEach(counter=>{

counterObserver.observe(counter);

});



/*==================================
INFINITE DRAFT CAROUSEL
==================================*/

const draftTrack = document.querySelector(".draft-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (draftTrack && nextBtn && prevBtn) {

    // Duplicate cards once
    draftTrack.innerHTML += draftTrack.innerHTML;

    const cards = draftTrack.querySelectorAll(".draft-card");

    let gap = 30;
    let cardWidth = cards[0].getBoundingClientRect().width;
    let move = cardWidth + gap;

    let autoSlide;

    function nextSlide() {
        draftTrack.scrollBy({
            left: move,
            behavior: "smooth"
        });
    }

    function prevSlide() {
        draftTrack.scrollBy({
            left: -move,
            behavior: "smooth"
        });
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Infinite Loop
    draftTrack.addEventListener("scroll", () => {

        const originalWidth = draftTrack.scrollWidth / 2;

        if (draftTrack.scrollLeft >= originalWidth) {
            draftTrack.scrollLeft -= originalWidth;
        }

        if (draftTrack.scrollLeft < 1) {
            draftTrack.scrollLeft += originalWidth;
        }

    });

    function startAuto() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    startAuto();

    draftTrack.addEventListener("mouseenter", stopAuto);
    draftTrack.addEventListener("mouseleave", startAuto);

    window.addEventListener("resize", () => {

        cardWidth = cards[0].getBoundingClientRect().width;
        move = cardWidth + gap;

    });

}