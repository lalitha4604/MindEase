// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
  // script.js

// Smooth Scroll to Sections (if you plan to link anchors later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Optional: Music Card Hover Effect using JS (add a glow animation)
const musicCards = document.querySelectorAll('.music-card');

musicCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 25px rgba(137, 87, 255, 0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 8px 20px rgba(137, 87, 255, 0.1)';
  });
});

// Optional: Greeting Message Popup
window.addEventListener('load', () => {
  setTimeout(() => {
    alert("🎵 Welcome to the Relaxing Music Zone! Let your mind float in peace 🌈");
  }, 500);
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("Music page loaded.");
  // Future functionality can be added here if needed.
});
  const readMoreButtons = document.querySelectorAll(".readmore-btn");

  readMoreButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".article-card");
      const content = card.querySelector(".readmore-content");

      content.classList.toggle("hidden");

      if (content.classList.contains("hidden")) {
        btn.textContent = "Read More →";
      } else {
        btn.textContent = "Read Less ←";
      }
    });
  });
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('active');
        });
      });
    });
    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission
      window.location.href = "index.html"; // Redirect to index page
    });




    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Login successful!");
      window.location.href = "index.html";
    });


