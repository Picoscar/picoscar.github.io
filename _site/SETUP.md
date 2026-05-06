# INSTRUCCIONES PARA SUBIR A GITHUB 🚀

## Paso 1: Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un repositorio llamado: **picoscar.github.io**
   - Selecciona "Public"
   - NO inicialices con README (ya tenemos uno)
3. Copia la URL del repositorio (ej: `https://github.com/picoscar/picoscar.github.io.git`)

## Paso 2: Configurar Git localmente

Abre la terminal/cmd en la carpeta `jekyll-site` y ejecuta:

```bash
# Inicializar repositorio git
git init

# Añadir todos los archivos
git add .

# Hacer primer commit
git commit -m "Initial commit: Casa Virtual de Picóscar"

# Añadir el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/picoscar/picoscar.github.io.git

# Cambiar rama a main
git branch -M main

# Hacer push
git push -u origin main
```

## Paso 3: Verificar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a Settings → Pages
3. En "Build and deployment", selecciona:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Click en "Save"

Tu sitio estará disponible en: https://picoscar.github.io

## Paso 4: Usar dominio personalizado (opcional)

Si quieres usar `picoscar.com`:

1. En el repositorio, ve a Settings → Pages
2. En "Custom domain" escribe: `picoscar.com`
3. Click en "Save"
4. Configura los DNS de tu dominio:
   - A records apuntando a:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

GitHub creará automáticamente un archivo `CNAME`

## Paso 5: Hacer cambios después

Para hacer cambios:

```bash
# Edita los archivos que necesites

# Cuando estés listo:
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

---

## Solución de problemas

### El sitio no aparece
- Espera 2-3 minutos después del push
- Ve a Settings → Pages y verifica el estado
- Revisa que tengas `index.md` en la raíz

### Jekyll no se ejecuta localmente
```bash
bundle update
bundle exec jekyll serve
```

### Cambios no aparecen
```bash
# Borra la carpeta _site
rm -rf _site

# Vuelve a hacer build
bundle exec jekyll serve
```

---

**¡Listo! Tu Casa Virtual está en línea.** 🏠✨
