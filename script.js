// ==============================
// 1. Mobile Navigation Toggle
// ==============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
});





// ==============================
// 2. Testimonial Slider
// ==============================

const testimonials = document.querySelectorAll(".testimonial-card");
const wrapper = document.querySelector(".testimonial-cards-wrapper");
const btnNext = document.querySelector(".arrow-next");
const btnPrev = document.querySelector(".arrow-prev");
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}

btnNext?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
});

btnPrev?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
});


// ==============================
// 3. (Optional) Form Submission Demo
// ==============================

const contactForm = document.querySelector("form");

contactForm?.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission
    alert("Thank you for reaching out! We'll get back to you shortly.");
    contactForm.reset();
});
