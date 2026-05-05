// Casa Virtual de Picóscar - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // MODAL CONTROL
    const hamburger = document.getElementById('hamburger');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.querySelector('.modal');

    if (hamburger && modalOverlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            modalOverlay.classList.toggle('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                hamburger.classList.remove('active');
                modalOverlay.classList.remove('active');
            }
        });

        // Cerrar modal al hacer click en un enlace
        document.querySelectorAll('.modal a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                modalOverlay.classList.remove('active');
            });
        });
    }

    // PARALLAX EFFECT
    const doorImage = document.getElementById('doorImage');
    const hero = document.querySelector('.hero');

    if (doorImage && hero) {
        window.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const offsetX = (mouseX - centerX) * 0.02;
            const offsetY = (mouseY - centerY) * 0.02;
            
            doorImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.02)`;
        });

        // Reset parallax cuando el mouse sale
        hero.addEventListener('mouseleave', () => {
            doorImage.style.transform = 'translate(0, 0) scale(1)';
        });

        // Parallax en scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            doorImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

});
