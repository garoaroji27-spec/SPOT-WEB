document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mobileHeader = document.querySelector(".mobile-header");

  if (menuToggle && mobileMenu && menuOverlay && mobileHeader) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
      menuToggle.classList.toggle("active");
      menuOverlay.classList.toggle("is-open");
      mobileHeader.classList.toggle("menu-open");
    });

    menuOverlay.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.classList.remove("active");
      menuOverlay.classList.remove("is-open");
      mobileHeader.classList.remove("menu-open");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".auto-slider");

  if (!slider) return;

  setInterval(() => {
    const firstCard = slider.querySelector(".actividad-slide");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 28;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  }, 10000);
});

document.addEventListener("DOMContentLoaded", () => {
  const benefitsSlider = document.querySelector(".benefits-cards");

  if (!benefitsSlider || window.innerWidth > 900) return;

  setInterval(() => {
    const firstCard = benefitsSlider.querySelector(".card");
    if (!firstCard) return;

    const gap = 16;
    const cardWidth = firstCard.offsetWidth + gap;
    const maxScroll = benefitsSlider.scrollWidth - benefitsSlider.clientWidth;

    if (benefitsSlider.scrollLeft >= maxScroll - 10) {
      benefitsSlider.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      benefitsSlider.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  }, 10000);
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".servicios-track");
  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;
    slider.scrollLeft = scrollLeft - walk;
  });
});