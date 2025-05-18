document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calcula a posição do destino considerando o cabeçalho fixo
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Animação personalizada
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Adiciona classe ativa ao link clicado (opcional)
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});