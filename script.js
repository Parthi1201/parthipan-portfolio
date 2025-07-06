// Reveal animation
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
sections.forEach((section, index) => {
  const sectionTop = section.getBoundingClientRect().top;
  if (sectionTop < triggerBottom && !section.classList.contains('visible')) {
    setTimeout(() => {
      section.classList.add('visible');
    }, index * 100); // staggered reveal
  }
});
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing animation
const phrases = [
  "Java Developer",
  "Web Developer",
  "Cybersecurity Buff"
];

const typedText = document.getElementById("typed-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, letterIndex);

  if (typedText) {
    typedText.textContent = currentText;
  }

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) {
    type();
  }
});
// Disable browser scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Force scroll to top on reload
window.onload = () => {
  setTimeout(() => window.scrollTo(0, 0), 0);
};


// particle js

particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#66f"
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#66f",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});




function scrollToSection(id) {
  const element = document.getElementById(id);
  let offset = 30; // Default offset

  // Customize offset for specific sections
  switch (id) {
    case 'about':
      offset = -30;
      break;
    case 'projects':
      offset = 25;
      break;
    case 'skills':
      offset = 10;
      break;
    case 'abilities':
      offset = 15;
      break;
    case 'contact':
      offset = -50;
      break;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}


// Reveal animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');

const revealSkills = () => {
  const triggerBottom = window.innerHeight * 0.85;

  skillCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom && !card.classList.contains('visible')) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100); // Staggered reveal
    }
  });
};

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);


const abilitiesSection = document.querySelector('.abilities-section');

const revealAbilities = () => {
  const triggerPoint = window.innerHeight * 0.85;
  const sectionTop = abilitiesSection.getBoundingClientRect().top;

  if (sectionTop < triggerPoint && !abilitiesSection.classList.contains('animate')) {
    abilitiesSection.classList.add('animate');
  }
};

window.addEventListener('scroll', revealAbilities);
window.addEventListener('load', revealAbilities);


const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      setTimeout(() => {
        el.classList.add('reveal-visible');
      }, i * 150); // stagger effect
    }
  });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);


// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
backToTopBtn.style.animation = "slideUpFadeIn 0.4s ease";

    } else {
      backToTopBtn.style.display = "none";
backToTopBtn.style.animation = "";

    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

window.scrollTo({
  top: 0,
  behavior: "smooth"
});




const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

