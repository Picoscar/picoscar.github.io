---
layout: default
title: Casa Virtual de Picóscar
---

<!-- HERO SECTION -->
<!-- HERO SECTION -->
<section class="hero">
    <div class="hero-content">
        <div class="door-container">
            <img 
                src="/assets/images/door/01-1985.jpg" 
                alt="Puerta" 
                class="door-image"
                id="doorImage"
            >
        </div>
    </div>
</section>

<script>
    // Configuración de imágenes de la puerta
    const doorImages = [
        '/assets/images/door/01-1985.jpg',
        '/assets/images/door/02-2009.jpg',
        '/assets/images/door/03-2011.jpg',
        '/assets/images/door/04-2013.jpg',
        '/assets/images/door/05-2016.jpg',
        '/assets/images/door/06-2018.jpg',
        '/assets/images/door/07-2025.jpg'
    ];
    
    let currentImageIndex = 0;
    
    const doorImage = document.getElementById('doorImage');
    const doorContainer = document.querySelector('.door-container');
    
    if (doorImage && doorContainer) {
        doorContainer.addEventListener('click', function() {
            // Avanza al siguiente índice
            currentImageIndex = (currentImageIndex + 1) % doorImages.length;
            
            // Cambia la imagen
            doorImage.src = doorImages[currentImageIndex];
            
            // Efecto visual (opcional)
            doorImage.style.opacity = '0.5';
            setTimeout(() => {
                doorImage.style.opacity = '1';
            }, 100);
        });
    }
</script>
