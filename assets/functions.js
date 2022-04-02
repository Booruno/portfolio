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
