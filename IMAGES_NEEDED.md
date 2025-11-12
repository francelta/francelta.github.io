# 📸 Imágenes Requeridas para el Portafolio

## ⚠️ Importante
El sitio está completo y funcional, pero necesitas descargar/agregar las siguientes imágenes para que se vea completamente terminado.

---

## 📁 Estructura de Carpetas

```
public/
├── fran-profile.jpg          # Tu foto de perfil
├── logo.svg                  # Logo del navbar (opcional)
├── favicon.ico               # Favicon del sitio
├── fonts/
│   └── CalSans-SemiBold.woff2  # Fuente Cal Sans
├── projects/
│   ├── project-1.png
│   ├── project-2.png
│   ├── project-3.png
│   ├── project-4.png
│   ├── project-5.png
│   └── project-6.png
└── blog/
    ├── blog-1.png
    ├── blog-2.png
    └── blog-3.png
```

---

## 📋 Lista de Imágenes por Prioridad

### 🔴 **Prioridad Alta (Necesarias para que funcione)**

#### 1. **Foto de Perfil**
- **Ruta:** `public/fran-profile.jpg`
- **Descripción:** Tu foto de perfil profesional para el Hero Section
- **Formato recomendado:** JPG o PNG
- **Dimensiones recomendadas:** 800x800px (cuadrada)
- **Peso máximo:** 500KB

#### 2. **Fuente Cal Sans**
- **Ruta:** `public/fonts/CalSans-SemiBold.woff2`
- **Descripción:** Fuente personalizada para títulos
- **Descargar de:** https://github.com/calcom/font
- **O usar alternativa:** Si no quieres descargarla, puedes eliminar las referencias en `app/globals.css` y `tailwind.config.ts`

---

### 🟡 **Prioridad Media (Para sección de Proyectos)**

#### 3-8. **Imágenes de Proyectos** (6 imágenes)
- **Rutas:** 
  - `public/projects/project-1.png`
  - `public/projects/project-2.png`
  - `public/projects/project-3.png`
  - `public/projects/project-4.png`
  - `public/projects/project-5.png`
  - `public/projects/project-6.png`
- **Descripción:** Capturas de pantalla o mockups de tus proyectos
- **Formato recomendado:** PNG o JPG
- **Dimensiones recomendadas:** 1200x675px (16:9 ratio)
- **Peso máximo por imagen:** 300KB

**💡 Sugerencia temporal:** Puedes usar placeholders de https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+1

---

### 🟢 **Prioridad Baja (Para sección de Blog)**

#### 9-11. **Imágenes de Blog** (3 imágenes)
- **Rutas:**
  - `public/blog/blog-1.png`
  - `public/blog/blog-2.png`
  - `public/blog/blog-3.png`
- **Descripción:** Imágenes de portada para tus artículos de blog
- **Formato recomendado:** PNG o JPG
- **Dimensiones recomendadas:** 1200x675px (16:9 ratio)
- **Peso máximo por imagen:** 300KB

**💡 Sugerencia temporal:** Puedes usar placeholders de https://placehold.co/1200x675/10b981/ffffff/png?text=Blog+Post

---

## 🚀 Soluciones Rápidas

### Opción 1: Usar Placeholders Temporales
Mientras consigues tus imágenes reales, puedes usar servicios de placeholder:

```bash
cd /Users/Fran_1/Desktop/programacion/new_portfolio/public

# Descargar placeholders para proyectos
curl -o projects/project-1.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+1"
curl -o projects/project-2.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+2"
curl -o projects/project-3.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+3"
curl -o projects/project-4.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+4"
curl -o projects/project-5.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+5"
curl -o projects/project-6.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+6"

# Descargar placeholders para blog
curl -o blog/blog-1.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Blog+1"
curl -o blog/blog-2.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Blog+2"
curl -o blog/blog-3.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Blog+3"

# Placeholder para foto de perfil
curl -o fran-profile.jpg "https://placehold.co/800x800/10b981/ffffff/png?text=FC"
```

### Opción 2: Descargar la Fuente Cal Sans

```bash
cd /Users/Fran_1/Desktop/programacion/new_portfolio/public/fonts

# Descargar desde el repositorio oficial
curl -L -o CalSans-SemiBold.woff2 "https://github.com/calcom/font/raw/main/font/CalSans-SemiBold.woff2"
```

---

## ✅ Verificación

Después de agregar las imágenes, verifica que todo funcione:

```bash
cd /Users/Fran_1/Desktop/programacion/new_portfolio
npm run dev
```

Abre http://localhost:3000 y verifica que todas las imágenes se vean correctamente.

---

## 📝 Notas Adicionales

- **Favicon:** Si no tienes un `favicon.ico`, puedes generarlo en https://favicon.io/
- **Logo:** Si prefieres no usar un logo SVG, el navbar ya tiene un logo de texto "FC." que se ve genial
- **Optimización:** Todas las imágenes son procesadas automáticamente por Next.js Image para mejor rendimiento

---

## 🎨 Personalización

No olvides actualizar también:
1. Los enlaces de redes sociales en `components/ContactSection.tsx`
2. Los URLs de proyectos en `components/ProjectsSection.tsx`
3. Los enlaces de blog en `components/BlogSection.tsx`
4. Tu email en `components/ContactSection.tsx`

