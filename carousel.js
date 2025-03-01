const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const totalSlides = slides.length;
function updateDots(currDot, targetDot) {
  currDot.classList.remove("current-dot");
  currDot.classList.remove("bg-[#7562E0]");
  targetDot.classList.add("current-dot");
  targetDot.classList.add("bg-[#7562E0]");
}
function moveToSlide(currSlide, targetSlide) {
  currSlide.classList.remove("current-slide");
  currSlide.classList.add("hidden");
  targetSlide.classList.remove("hidden");
  targetSlide.classList.add("current-slide");
}
function next() {
  const currentSlide = document.querySelector(".current-slide");
  if (currentSlide.nextElementSibling != null) {
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = document.querySelector(".current-dot");
    const nextDot = currentDot.nextElementSibling;
    updateDots(currentDot, nextDot);
    moveToSlide(currentSlide, nextSlide);
  }
}
function prev() {
  const currentSlide = document.querySelector(".current-slide");
  if (currentSlide.previousElementSibling != null) {
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".current-dot");
    const prevDot = currentDot.previousElementSibling;
    moveToSlide(currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  }
}
