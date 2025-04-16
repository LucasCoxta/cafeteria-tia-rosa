document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos
  const menuMobile = document.getElementById("menu-mobile");
  const menuItens = document.querySelector(".itens-menu");

  // Verifica se os elementos existem na página atual
  if (menuMobile && menuItens) {
    const menuIcon = menuMobile.querySelector("i");

    // Função para fechar o menu
    function closeMenu() {
      menuItens.classList.remove("active");
      if (menuIcon) {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    }

    // Abrir/fechar menu mobile
    menuMobile.addEventListener("click", function () {
      menuItens.classList.toggle("active");

      if (menuIcon) {
        if (menuItens.classList.contains("active")) {
          menuIcon.classList.remove("fa-bars");
          menuIcon.classList.add("fa-times");
        } else {
          menuIcon.classList.remove("fa-times");
          menuIcon.classList.add("fa-bars");
        }
      }
    });

    // Fechar menu ao rolar
    window.addEventListener("scroll", function () {
      if (menuItens.classList.contains("active")) {
        closeMenu();
      }
    });

    // Fechar menu ao clicar em um item (se existirem itens)
    const menuItems = document.querySelectorAll(".itens-menu a");
    if (menuItems.length > 0) {
      menuItems.forEach((item) => {
        item.addEventListener("click", function () {
          closeMenu();
        });
      });
    }
  }
});
