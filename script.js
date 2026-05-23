// ===== Menu Data =====
const menuData = {
    starters: [
        { name: "Truffle Mushroom Velouté", price: "₹850", desc: "Wild forest mushrooms, black truffle oil, chive crème fraîche", tags: ["vegetarian"] },
        { name: "Seared Scallops", price: "₹1,200", desc: "Hokkaido scallops, cauliflower purée, golden raisin, caper butter", tags: ["chef's pick"] },
        { name: "Burrata & Heritage Tomato", price: "₹780", desc: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic", tags: ["vegetarian"] },
        { name: "Tuna Tartare", price: "₹1,100", desc: "Yellowfin tuna, avocado mousse, sesame tuile, wasabi ponzu", tags: ["raw"] },
        { name: "Lamb Seekh Kebab", price: "₹950", desc: "Charcoal-grilled lamb mince, saffron yogurt, pickled onion", tags: ["signature"] },
        { name: "Lobster Bisque", price: "₹1,050", desc: "Slow-simmered lobster shell broth, cognac cream, chervil", tags: ["chef's pick"] },
    ],
    mains: [
        { name: "Wagyu Beef Tenderloin", price: "₹3,800", desc: "A5 Japanese wagyu, truffle jus, pomme purée, seasonal vegetables", tags: ["signature"] },
        { name: "Pan-Roasted Sea Bass", price: "₹2,200", desc: "Chilean sea bass, saffron risotto, beurre blanc, micro herbs", tags: ["chef's pick"] },
        { name: "Truffle Tagliatelle", price: "₹1,600", desc: "Fresh hand-rolled pasta, black winter truffle, aged parmesan, egg yolk", tags: ["vegetarian"] },
        { name: "Rack of Lamb", price: "₹2,800", desc: "Herb-crusted NZ lamb, ratatouille, rosemary jus, roasted garlic", tags: ["signature"] },
        { name: "Duck Breast Confit", price: "₹2,400", desc: "Slow-cooked Muscovy duck, cherry reduction, celeriac purée", tags: [] },
        { name: "Wild Mushroom Risotto", price: "₹1,400", desc: "Arborio rice, porcini & shiitake, truffle oil, parmesan crisp", tags: ["vegetarian", "chef's pick"] },
    ],
    desserts: [
        { name: "Chocolate Fondant", price: "₹750", desc: "70% Valrhona chocolate, molten centre, vanilla bean ice cream", tags: ["signature"] },
        { name: "Crème Brûlée", price: "₹650", desc: "Tahitian vanilla custard, caramelized sugar, fresh berries", tags: [] },
        { name: "Mango Kulfi Tart", price: "₹700", desc: "Alphonso mango kulfi, pistachio praline, cardamom shortcrust", tags: ["chef's pick"] },
        { name: "Tiramisu", price: "₹680", desc: "Mascarpone cream, espresso-soaked ladyfingers, cocoa dust", tags: [] },
    ],
    drinks: [
        { name: "Ember Old Fashioned", price: "₹950", desc: "Bourbon, smoked maple, aromatic bitters, orange peel, oak smoke", tags: ["signature"] },
        { name: "Rose Garden Spritz", price: "₹750", desc: "Gin, elderflower, rose water, prosecco, edible petals", tags: [] },
        { name: "Masala Chai Espresso Martini", price: "₹850", desc: "Vodka, espresso, chai-infused kahlua, star anise", tags: ["chef's pick"] },
        { name: "Curated Wine Pairing", price: "₹2,500", desc: "Four-course wine pairing selected by our sommelier", tags: [] },
    ],
};

// ===== DOM Elements =====
const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
const menuGrid = document.getElementById("menuGrid");
const testimonialTrack = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("testimonialDots");
const reservationForm = document.getElementById("reservationForm");
const formSuccess = document.getElementById("formSuccess");

// ===== Loader =====
window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 1500);
});

// ===== Custom Cursor =====
let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
    cursorDot.style.transform = "translate(-50%, -50%)";
    cursorRing.style.left = dotX + "px";
    cursorRing.style.top = dotY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("a, button, .menu-tab, .gallery-item").forEach((el) => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursorRing.classList.remove("hover"));
});

// ===== Navbar Scroll =====
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (link) {
            link.classList.toggle("active", scrollPos >= top && scrollPos < top + height);
        }
    });
}

// ===== Mobile Menu =====
navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    const spans = navToggle.querySelectorAll("span");
    if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});

document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        const spans = navToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    });
});

// ===== Menu Tabs =====
function renderMenu(category) {
    const items = menuData[category];
    menuGrid.innerHTML = items
        .map((item) => `
            <div class="menu-item">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.desc}</p>
                ${item.tags.length ? `<div class="menu-item-tags">${item.tags.map(t => `<span class="menu-item-tag">${t}</span>`).join("")}</div>` : ""}
            </div>
        `).join("");
}

document.querySelectorAll(".menu-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        menuGrid.style.opacity = "0";
        setTimeout(() => {
            renderMenu(tab.dataset.category);
            menuGrid.style.opacity = "1";
        }, 300);
    });
});
menuGrid.style.transition = "opacity 0.3s";
renderMenu("starters");

// ===== Testimonials Slider =====
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".testimonial-card").length;

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");
        dot.classList.add("testimonial-dot");
        dot.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    currentSlide = index;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll(".testimonial-dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentSlide);
    });
}

prevBtn.addEventListener("click", () => goToSlide((currentSlide - 1 + totalSlides) % totalSlides));
nextBtn.addEventListener("click", () => goToSlide((currentSlide + 1) % totalSlides));
createDots();

// Auto-slide
setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000);

// ===== Counter Animation =====
function animateCounters() {
    document.querySelectorAll(".stat-number").forEach((counter) => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(target * eased).toLocaleString() + "+";
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ===== Scroll Animations =====
const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.querySelector(".stat-number")) animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

// ===== Reservation Form =====
const dateInput = document.getElementById("date");
if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
}

reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = document.getElementById("submitReservation");
    btn.innerHTML = '<span>Confirming...</span>';
    btn.disabled = true;
    setTimeout(() => {
        formSuccess.classList.add("show");
    }, 1500);
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Parallax on hero image =====
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-img");
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `scale(1.1) translateY(${scrolled * 0.15}px)`;
    }
});
