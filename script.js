const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

menuToggle?.addEventListener("click", () => {
  const isOpen = navigation?.classList.toggle("is-open") ?? false;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.textContent = "Obrigado! Recebemos a sua mensagem e entraremos em contacto em breve.";
  contactForm.reset();
});
