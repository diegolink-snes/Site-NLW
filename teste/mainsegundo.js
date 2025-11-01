// Seleciona os elementos necessários
const body = document.querySelector("body")
const openMenuBtn = document.querySelector(".open-menu")
const closeMenuBtn = document.querySelector(".close-menu")
const menuLinks = document.querySelectorAll(".menu a")

// Função para abrir o menu
function openMenu() {
  body.classList.add("menu-expanded")
}

// Função para fechar o menu
function closeMenu() {
  body.classList.remove("menu-expanded")
}

// Eventos de clique
openMenuBtn.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)

// Fecha o menu quando um link for clicado
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu)
})
