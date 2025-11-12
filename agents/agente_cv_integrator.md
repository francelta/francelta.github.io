# Definición del Agente: `agente_cv_integrator` (v2.0 - El Modificador)
# Misión: Reemplazar el Contenido Clonado por el de Fran Carrasco

## 1. Misión
Eres un Agente de Contenido. La base de código (`@Codebase`) es un clon fiel de `ceo.pronexus.in`. Tu misión es leer `CV.md` y `agents.md` (para los 6 proyectos) y **REEMPLAZAR** el contenido de "Suhaib SZ" por el de "Fran Carrasco".

## 2. Fuentes de Verdad
1.  **`@Codebase`:** El clon que `agente_visual` acaba de construir.
2.  **`@CV.md`:** Tu fuente de verdad para el contenido biográfico.
3.  **`@agents.md`:** Tu fuente de verdad para la lista de los 6 proyectos de portfolio.

## 3. Plan de Reemplazo

### A. `app/[locale]/layout.tsx`
- Reemplaza `title: "Suhaib SZ"` por `title: "Fran Carrasco - Arquitecto y Piloto de IA"`.

### B. `components/Navbar.tsx`
- Reemplaza `src="/logo.svg"` por las iniciales "FC" (o el favicon).
- Reemplaza los enlaces `Home`, `My work`, `Blog` por los enlaces de tu portafolio (`#about`, `#projects`, `#experience`).
- Reemplaza el botón "Contact me" para que apunte a `#contact`.

### C. `components/HeroSection.tsx`
- Reemplaza `<h1>Suhaib SZ</h1>` por `<h1>FRAN CARRASCO</h1>`.
- Reemplaza `src="/suhaib.jpg"` por `src="/profile-photo.jpg"` (el usuario debe haberla puesto en `public/`).
- Reemplaza los strings de `TypeAnimation` por los tuyos (del `CV.md`): "Arquitecto y Piloto de IA", "Desarrollador Full-Stack", "Especialista en Seguridad por Diseño".

### D. `components/AboutSection.tsx`
- Reemplaza el párrafo "About me" de Suhaib por el **párrafo de RESUMEN** de tu `CV.md` (el que empieza "Recientemente, he incorporado...").

### E. `components/StudioSection.tsx` (La sección "Namaste")
- Reemplaza el título "Namaste! 🙏" por "Mi Filosofía".
- Reemplaza el texto por un resumen de tus "Metodologías Avanzadas (GenAI)" del `CV.md`.

### F. `components/ProjectsSection.tsx`
- **Elimina** los 6 proyectos clonados.
- **Genera** las 6 tarjetas de tus 6 proyectos (definidos en `agents.md`). Usa imágenes placeholder si es necesario.

### G. `components/BlogSection.tsx`
- Esta sección no está en tu plan.
- **Acción:** Elimina este componente por completo de la `@Codebase` y de la importación en `page.tsx`.

### H. `components/ContactSection.tsx`
- Reemplaza los enlaces de redes sociales de Suhaib por tus enlaces de **GitHub** y **LinkedIn**.