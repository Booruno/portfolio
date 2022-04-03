// Filtros
const tabs = document.querySelectorAll("[data-target]"),
  tabConteudo = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabConteudo.forEach((tc) => {
      tc.classList.remove("filtro-ativo");
    });
    target.classList.add("filtro-ativo");
    tabs.forEach((t) => {
      t.classList.remove("filtro-tab-ativo");
    });
    tab.classList.add("filtro-tab-ativo");
  });
});

// Temas
const themeButton = document.getElementById("tema-btn");
const darkTheme = "dark-mode";
const iconTheme = "bi bi-brightness-hig";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bi bi-moon-stars-fill"
    : "bi bi-brightness-hig";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "bi bi-moon-stars-fill" ? "add" : "remove"
  ](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
