document.addEventListener('DOMContentLoaded', function() {
  // Elementos do modal
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalGallery = document.getElementById('modal-gallery');
  const closeBtn = document.querySelector('.close');

  // Dados dos serviços (edite conforme necessário)
  const servicos = {
    "Iluminação": [
      {
        src: "works/luces.jpg",
        title: "Design Moderno",
        description: "Sistema de iluminação LED com controle inteligente"
      },
      {
        src: "works/extra1.jpg",
        title: "Instalação",
        description: "Profissionais certificados garantindo qualidade"
      }
    ],
    "Eletrica": [
      {
        src: "works/Panel_electrico.jpg",
        title: "Painel Elétrico",
        description: "Instalação de quadros de distribuição modernos"
      }
    ]
  };

  // Abrir modal ao clicar nas imagens
  document.querySelectorAll('.servico img').forEach(img => {
    img.addEventListener('click', function(e) {
      const servico = this.closest('.servico');
      const titulo = servico.querySelector('h3').textContent;
      
      modalTitle.textContent = titulo;
      modalGallery.innerHTML = '';

      if (servicos[titulo]) {
        servicos[titulo].forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = `gallery-item ${index % 2 === 0 ? '' : 'reversed'}`;
          itemDiv.innerHTML = `
            <div class="image-container">
              <img src="${item.src}" alt="${item.title}">
              <div class="image-marker">${index + 1}</div>
            </div>
            <div class="text-container">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          `;
          modalGallery.appendChild(itemDiv);
        });
      }

      modal.classList.add("mostrar");
      document.body.style.overflow = 'hidden';
    });
  });

  // Fechar modal
  closeBtn.addEventListener('click', function() {
    modal.classList.remove("mostrar");
    document.body.style.overflow = 'auto';
  });

  // Fechar ao clicar fora do conteúdo
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove("mostrar");
      document.body.style.overflow = 'auto';
    }
  });
});