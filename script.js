
// Video Play/Pause Toggle
const video = document.getElementById("featureVideo");
const overlay = document.getElementById("videoOverlay");
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    overlay.style.display = "none";
  } else {
    video.pause();
    overlay.style.display = "block";
  }
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    dots[i].classList.remove("active");
  });
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
  currentTestimonial = index;
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);

// Modal Logic
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
