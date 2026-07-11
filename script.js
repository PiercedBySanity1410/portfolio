// Typing Effect Logic
const phrases = [
  "Full-Stack Developer",
  "Data Science Enthusiast",
  "Competitive Programmer",
  "Backend Architect",
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
const typedOutput = document.getElementById("typed-output");

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    typedOutput.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    typingSpeed = 50; // Delete faster
  } else {
    typedOutput.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at the end of a word
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before typing new word
  }

  setTimeout(typeEffect, typingSpeed);
}

// Scroll Reveal Logic (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Optional: observer.unobserve(entry.target) if you only want it to animate once
    }
  });
};

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach((el) => revealObserver.observe(el));

// Initialize Scripts on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 1000); // Start typing effect after 1 second delay
});
