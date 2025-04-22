document.addEventListener("DOMContentLoaded", function () {
  // Dados compartilhados
  const subcategoriesData = {
    departamento1: [
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
    ],
    Departamento: [
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
      {
        Titulo: "Categoria",
        Subcategorias: ["categoria", "categoria", "categoria", "categoria"],
      },
    ],
  };
  function renderCategories(categories, container) {
    if (categories) {
      let html = '<div class="categories-grid">';
      html += categories
        .map(
          (group) => `
                <div class="category-column">
                    <h4 class="category-title">${group.Titulo}</h4>
                    <ul class="category-list">
                        ${group.Subcategorias.map(
                          (subcategory) =>
                            `<li><a href="#">${subcategory}</a></li>`
                        ).join("")}
                    </ul>
                </div>
            `
        )
        .join("");
      html += "</div>";
      container.innerHTML = html;
    } else {
      container.innerHTML = `<p>Nenhuma categoria disponível para esse departamento</p>`;
    }
  }

  const departmentItems = document.querySelectorAll(".departments-column li");
  const subcategoriesContent = document.querySelector(".subcategories-content");
  const megaMenu = document.querySelector(".mega-menu");

  departmentItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const category = this.getAttribute("data-category");
      renderCategories(subcategoriesData[category], subcategoriesContent);
    });
  });

  megaMenu.addEventListener("mouseleave", function () {
    subcategoriesContent.innerHTML = `<p>Passe o mouse em um departamento para ver as subcategorias</p>`;
  });

  const navDepartments = document.querySelectorAll(".nav-department");

  navDepartments.forEach((department) => {
    const departmentName = department.querySelector("a").textContent;
    const megaMenu = department.querySelector(".nav-mega-menu");
    const categoriesGrid = department.querySelector(".categories-grid");

    renderCategories(subcategoriesData[departmentName], categoriesGrid);

    department.addEventListener("mouseenter", function () {
      megaMenu.style.display = "block";
    });

    department.addEventListener("mouseleave", function () {
      megaMenu.style.display = "none";
    });
  });
});


// rolagem de roupas
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os containers de rolagem
  const scrollContainers = document.querySelectorAll('.scroll-container');
  
  scrollContainers.forEach((container, containerIndex) => {
      // Cria um ID único se não existir
      if (!container.id) {
          container.id = `scroll-container-${containerIndex}`;
      }
      
      const cardsContainer = container.querySelector('.cards-container');
      const leftArrow = container.querySelector('.left-arrow');
      const rightArrow = container.querySelector('.right-arrow');
      const dots = container.querySelectorAll('.dot');
      
      // Configuração específica para este carrossel
      const card = container.querySelector('.card');
      const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
      const visibleCards = Math.floor(cardsContainer.clientWidth / cardWidth);
      const totalSlides = Math.ceil(cardsContainer.children.length / visibleCards);

      function checkScroll() {
          const scrollLeft = cardsContainer.scrollLeft;
          const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
          
          const activeIndex = Math.min(
              Math.floor(scrollLeft / cardsContainer.clientWidth * totalSlides),
              dots.length - 1
          );
          
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === activeIndex);
          });

          // Atualiza visibilidade das setas
          leftArrow.classList.toggle('hidden', scrollLeft === 0);
          rightArrow.classList.toggle('hidden', scrollLeft >= maxScroll - 10); // 10px de tolerância
      }
      
      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              const scrollTo = index * cardsContainer.clientWidth;
              cardsContainer.scrollTo({
                  left: scrollTo,
                  behavior: 'smooth'
              });
          });
      });
      
      leftArrow.addEventListener('click', () => {
          cardsContainer.scrollBy({ 
              left: -cardsContainer.clientWidth, 
              behavior: 'smooth' 
          });
      });
      
      rightArrow.addEventListener('click', () => {
          cardsContainer.scrollBy({ 
              left: cardsContainer.clientWidth, 
              behavior: 'smooth' 
          });
      });
      
      cardsContainer.addEventListener('scroll', checkScroll);
      
      // Inicializa
      checkScroll();
      
      // Redimensionamento da janela
      const resizeObserver = new ResizeObserver(() => {
          checkScroll();
      });
      
      resizeObserver.observe(cardsContainer);
  });
});

// controle de busca
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchResult = document.getElementById('searchResult');

  searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
          searchResult.textContent = `Você buscou por: '${searchTerm}'`;
          searchResult.style.display = 'block';
          setTimeout(() => {
              searchResult.style.display = 'none';
          }, 3000);
      } else {
          searchResult.style.display = 'none';
      }
  });

  document.addEventListener('click', function(event) {
      if (!searchForm.contains(event.target)) {
          searchResult.style.display = 'none';
      }
  });
});

// footer controle de seções
document.addEventListener('DOMContentLoaded', function() {
  const sectionHeaders = document.querySelectorAll('.footer-section h4');
  
  sectionHeaders.forEach(header => {
      header.addEventListener('click', function() {
          this.classList.toggle('active');
          const sectionContent = this.parentNode.querySelectorAll('h5');
          sectionContent.forEach(content => {
              content.classList.toggle('show');
          });
      });
  });
});