// Suave scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
 
  // Carrossel simples
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Troca automática a cada 4s
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 9000);
/*texte */
// Abrir galeria
const openGalleryBtn = document.getElementById("openGallery");
const galleryModal = document.getElementById("galleryModal");
const closeGalleryBtn = document.getElementById("closeGallery");

openGalleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "block";
});

// Fechar clicando no X
closeGalleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

// Fechar clicando fora da imagem
window.addEventListener("click", (e) => {
  if (e.target === galleryModal) {
    galleryModal.style.display = "none";
  }
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Enviar para FormSubmit
  const formData = new FormData(form);
  await fetch("https://formsubmit.co/jhonlligabriel@gmail.com", {
    method: "POST",
    body: formData
  });

  // Mostra pop-up
  popup.style.display = "flex";
  form.reset();
});

// Fechar no X
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fechar clicando fora
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
