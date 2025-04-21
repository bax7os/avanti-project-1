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

document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.cards-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const dots = document.querySelectorAll('.dot');
    
    // Calcula a quantidade de slides
    const card = document.querySelector('.card');
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const totalSlides = Math.ceil(container.children.length / visibleCards);

    function checkScroll() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        const activeIndex = Math.min(
            Math.floor(scrollLeft / container.clientWidth * totalSlides),
            dots.length - 1
        );
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const scrollTo = index * container.clientWidth;
            container.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        });
    });
    
    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    });
    
    rightArrow.addEventListener('click', () => {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    });
    
    container.addEventListener('scroll', checkScroll);
    checkScroll();
});