# Casa Virtual de Picóscar 🏠

Sitio web personal/profesional/artístico creado con Jekyll.

## Descripción

Un espacio virtual para acoger a los visitantes, mostrar proyectos y en el futuro invitarlos a crear y jugar.

- **Concepto**: Casa Virtual
- **Aesthetic**: Cálido y artesanal
- **Paleta**: Escala de grises
- **Features**: Menú modal, parallax, redes sociales

## Estructura

```
.
├── _config.yml          # Configuración principal
├── _layouts/
│   └── default.html     # Layout base
├── assets/
│   ├── css/
│   │   └── style.css    # Estilos principales
│   └── js/
│       └── main.js      # JavaScript
├── index.md             # Página de inicio
├── Gemfile              # Dependencias Ruby
└── README.md
```

## Instalación Local

### Requisitos
- Ruby 2.7 o superior
- Bundler

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/picoscar/picoscar.com.git
cd picoscar.com
```

2. **Instalar dependencias**
```bash
bundle install
```

3. **Ejecutar el servidor local**
```bash
bundle exec jekyll serve
```

El sitio estará disponible en `http://localhost:4000`

## Desplegar en GitHub Pages

1. **Crear un repositorio** llamado `picoscar.github.io` en GitHub
2. **Hacer push** del contenido a la rama `main`
3. **GitHub Pages** automáticamente generará el sitio

### Configuración de dominio personalizado
Si quieres usar `picoscar.com`:
1. Crea un archivo `CNAME` en la raíz con contenido: `picoscar.com`
2. Configura los registros DNS en tu proveedor de dominio apuntando a GitHub Pages

## Personalización

### Cambiar imagen de la puerta
En `index.md`, reemplaza la URL en:
```html
<img src="URL_NUEVA" alt="Descripción" class="door-image" id="doorImage">
```

### Mostrar/Ocultar elementos del menú
En `assets/css/style.css`:
- Para mostrar el título: Cambia `display: none;` a `display: block;` en `.modal h2`
- Para mostrar las opciones: Cambia `display: none;` a `display: block;` en `.modal ul`
- Para mostrar el divisor: Cambia `display: none;` a `display: block;` en `.modal-divider`

### Modificar redes sociales
Edita `_config.yml` en la sección `social`:
```yaml
social:
  instagram: https://instagram.com/picoscar
  facebook: https://facebook.com/picoscar
  github: https://github.com/picoscar
  linkedin: https://linkedin.com/in/picoscar
  youtube: https://youtube.com/@picoscar
  email: email@picoscar.com
```

## Próximas funcionalidades

- [ ] Secciones: Picóscar, SUA, Cinelibertad, Audiovisual, Textual
- [ ] Blog/Proyecto showcase
- [ ] Interactividad y juegos
- [ ] Formulario de contacto
- [ ] Galería de audiovisuales

## Tecnologías

- **Jekyll**: Generador de sitios estáticos
- **HTML5/CSS3/JavaScript**: Frontend
- **GitHub Pages**: Hosting

## Licencia

© 2026 Casa Virtual de Picóscar

## Contacto

📧 email@picoscar.com

---

**Nota**: Este sitio está en desarrollo continuo. Vuelve pronto para nuevas secciones y funcionalidades.
