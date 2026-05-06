# 🏠 Casa Virtual de Picóscar - PROYECTO COMPLETO

## ✅ Lo que hemos creado

Tu sitio web personal completo con **Jekyll**, listo para subir a **GitHub Pages**.

### 📦 Archivos generados

**Configuración:**
- ✅ `_config.yml` - Configuración de Jekyll (redes sociales, título, email)

**Layouts y Estilos:**
- ✅ `_layouts/default.html` - Layout principal (header, modal, footer)
- ✅ `assets/css/style.css` - Estilos completos (paleta gris, responsive)
- ✅ `assets/js/main.js` - Interactividad (modal, parallax)

**Contenido:**
- ✅ `index.md` - Página de inicio con puerta centrada

**Configuración del proyecto:**
- ✅ `Gemfile` - Dependencias Ruby
- ✅ `.gitignore` - Archivos a ignorar en Git

**Documentación:**
- ✅ `README.md` - Documentación completa
- ✅ `SETUP.md` - Instrucciones paso a paso para GitHub
- ✅ `ESTRUCTURA.md` - Descripción de la estructura

---

## 🎨 Características incluidas

### Design
- 🎨 **Paleta de grises** (8 tonos) - Cálida y artesanal
- 📱 **Responsive** - Funciona en móvil, tablet, desktop
- ✨ **Animaciones suaves** - Modal, hamburguesa, parallax

### Header
- Logo: `picoscar.com`
- Botón hamburguesa animado (se transforma en X)

### Menú Modal
- **Visible**: Iconos SVG de redes sociales
- **Oculto en CSS** (fácil de mostrar):
  - Título "Bienvenida"
  - Opciones: Picóscar, SUA, Cinelibertad, Audiovisual, Textual
  - Divisor visual

### Redes Sociales
Integradas en menú y footer con iconos públicos:
- 📷 Instagram
- 👥 Facebook
- 🐙 GitHub
- 💼 LinkedIn
- 🎥 YouTube
- 📧 Email: email@picoscar.com

### Hero Section
- Puerta centrada
- Parallax en el mouse (sigue movimiento)
- Parallax en scroll (se mueve lentamente)
- Animación fade-in al cargar

### Footer
- Redes sociales con iconos
- Copyright 2026
- Texto: "Casa Virtual de Picóscar"

---

## 🚀 Próximos pasos

### 1. Descargar los archivos
Ve a `/mnt/user-data/outputs/` y descarga:
- Todos los archivos individuales, O
- El ZIP `jekyll-picoscar-site.tar.gz`

### 2. Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre: `picoscar.github.io`
- Público
- Sin README inicial

### 3. Subir archivos a GitHub
Sigue las instrucciones en `SETUP.md`:
```bash
git init
git add .
git commit -m "Initial commit: Casa Virtual"
git remote add origin https://github.com/picoscar/picoscar.github.io.git
git branch -M main
git push -u origin main
```

### 4. Acceder al sitio
- URL: https://picoscar.github.io
- (O tu dominio personalizado si configuras CNAME)

---

## 🎯 Personalización (después)

### Cambiar la imagen de la puerta
En `index.md`, reemplaza la URL:
```markdown
<img src="NUEVA_URL" alt="Descripción" ...>
```

### Mostrar opciones del menú
En `assets/css/style.css`, cambia:
- `.modal h2` → `display: block;` (para mostrar título)
- `.modal ul` → `display: block;` (para mostrar opciones)
- `.modal-divider` → `display: block;` (para mostrar línea divisoria)

### Modificar redes sociales
En `_config.yml`, edita la sección `social`:
```yaml
social:
  instagram: https://instagram.com/picoscar
  facebook: https://facebook.com/picoscar
  # ... etc
```

### Agregar nuevas secciones
Una vez actives el menú, puedes crear:
- `picoscar/index.md`
- `sua/index.md`
- `cinelibertad/index.md`
- etc.

---

## 📋 Tecnologías usadas

- **Jekyll** - Generador de sitios estáticos
- **HTML5** - Estructura
- **CSS3** - Estilos responsive
- **JavaScript vanilla** - Interactividad
- **SVG** - Iconos de redes sociales
- **GitHub Pages** - Hosting gratuito

---

## 💡 Notas importantes

✔️ **Código limpio** - Bien organizado y comentado  
✔️ **Listo para usar** - No necesita configuración adicional  
✔️ **Escalable** - Fácil de agregar nuevas secciones  
✔️ **SEO-friendly** - Con meta tags y estructura correcta  
✔️ **Performance** - Optimizado para velocidad  
✔️ **Open source** - Puedes compartir el repo  

---

## 🆘 Si tienes dudas

Revisa estos archivos:
1. **SETUP.md** - Instrucciones paso a paso
2. **README.md** - Documentación completa
3. **ESTRUCTURA.md** - Descripción de carpetas y archivos

---

## 🎉 ¡Tu Casa Virtual está lista!

```
picoscar.com
│
├─ 🏠 Home (con puerta y parallax)
├─ 📱 Responsive (móvil/tablet/desktop)
├─ 🎨 Diseño cálido artesanal
├─ 🔗 Redes sociales integradas
└─ 🚀 Alojado en GitHub Pages
```

**Próximo paso**: Sigue `SETUP.md` para subir a GitHub.

¡Bienvenida a tu Casa Virtual! 🏠✨

---

*Creado el 05 de mayo de 2026*
