// Espera o conteúdo da página ser totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos necessários
  const menuMobile = document.getElementById("menu-mobile"); // O botão do menu
  const menuItens = document.querySelector(".itens-menu"); // Lista de itens do menu

  // Verifica se os elementos selecionados existem na página
  if (menuMobile && menuItens) {
    // Seleciona o ícone dentro do botão de menu (geralmente um "hamburger" ou "X")
    const menuIcon = menuMobile.querySelector("i");

    // Função para fechar o menu (remover a classe 'active' do menu)
    function closeMenu() {
      menuItens.classList.remove("active"); // Remove a classe 'active' que exibe o menu
      if (menuIcon) {
        // Troca o ícone do menu de "X" para "hamburger"
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    }

    // Adiciona um evento de clique no botão do menu (abre/fecha o menu mobile)
    menuMobile.addEventListener("click", function () {
      menuItens.classList.toggle("active"); // Alterna a classe 'active' para mostrar ou esconder o menu

      if (menuIcon) {
        // Verifica se o menu está aberto ou fechado e altera o ícone
        if (menuItens.classList.contains("active")) {
          menuIcon.classList.remove("fa-bars"); // Remove o ícone de "hamburger"
          menuIcon.classList.add("fa-times"); // Adiciona o ícone de "X"
        } else {
          menuIcon.classList.remove("fa-times"); // Remove o ícone de "X"
          menuIcon.classList.add("fa-bars"); // Adiciona o ícone de "hamburger"
        }
      }
    });

    // Adiciona um evento de scroll na janela para fechar o menu quando o usuário rolar a página
    window.addEventListener("scroll", function () {
      // Se o menu está aberto (classe 'active' está presente), ele será fechado
      if (menuItens.classList.contains("active")) {
        closeMenu(); // Chama a função para fechar o menu
      }
    });

    // Adiciona um evento de clique nos itens do menu (fecha o menu quando um item é clicado)
    const menuItems = document.querySelectorAll(".itens-menu a"); // Seleciona todos os links no menu
    if (menuItems.length > 0) {
      // Para cada item no menu, adiciona um evento de clique
      menuItems.forEach((item) => {
        item.addEventListener("click", function () {
          closeMenu(); // Fecha o menu ao clicar em um item
        });
      });
    }
  }
});
