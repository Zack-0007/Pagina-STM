document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');
  const closeBtn = modal.querySelector('.close');
  const modalGallery = document.getElementById('modal-gallery');
  
  // Dados dos serviços
  const servicos = {
    "Iluminação": [
      {
        src: "works/luces.jpg",
        title: "Projeto Personalizado",
        description: "Sistema de iluminação LED com design moderno e controle inteligente"
      },
      {
        src: "works/extra1.jpg",
        title: "Instalação Profissional",
        description: "Técnicos especializados garantindo perfeito funcionamento"
      }
    ],
    "Eletrica": [
      {
        src: "works/Panel_electrico.jpg",
        title: "Painel Elétrico",
        description: "Instalação profissional de quadros de distribuição"
      }
    ],
    // Adicione outros serviços conforme necessário
  };

  // Abrir modal
  document.querySelectorAll('.servico img').forEach(img => {
    img.addEventListener('click', function(e) {
      // Calcula a posição do clique
      const rect = this.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Define a origem da animação
      modalContent.style.transformOrigin = `${clickX}px ${clickY}px`;
      
      // Preenche o conteúdo do modal
      const servico = this.closest('.servico');
      const titulo = servico.querySelector('h3').textContent;
      document.getElementById('modal-title').textContent = titulo;
      
      // Limpa a galeria anterior
      modalGallery.innerHTML = '';
      
      // Adiciona os itens da galeria
      if (servicos[titulo]) {
        servicos[titulo].forEach((item, index) => {
          const galleryItem = document.createElement('div');
          galleryItem.className = `gallery-item ${index % 2 === 0 ? '' : 'reversed'}`;
          
          galleryItem.innerHTML = `
            <div class="gallery-image">
              <img src="${item.src}" alt="${item.title}">
              <div class="image-marker">${index + 1}</div>
            </div>
            <div class="gallery-text">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          `;
          
          modalGallery.appendChild(galleryItem);
        });
      }
      
      // Mostra o modal
      modal.classList.add("mostrar");
      document.body.style.overflow = 'hidden';
    });
  });

  // Fechar modal
  function closeModal() {
    modal.classList.add("saindo");
    setTimeout(() => {
      modal.classList.remove("mostrar", "saindo");
      document.body.style.overflow = 'auto';
    }, 300);
  }

  // Event listeners para fechar
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});