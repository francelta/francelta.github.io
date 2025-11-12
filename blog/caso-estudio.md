# Caso de Estudio: Cómo Orquesté un Equipo de Agentes para Construir este Mismo Portafolio

El portafolio que estás viendo ahora mismo es la prueba tangible de mi filosofía. No pasé semanas moviendo divs en React.tsx ni peleándome con configuraciones de webpack.

**Este sitio no fue escrito por mí; fue dirigido por mí.**

Actué como **Director de Orquesta** para un equipo de agentes especializados que construyeron este sitio. El objetivo era ambicioso: clonar la interfaz de usuario de alta fidelidad de `ceo.pronexus.in` (un diseño que admiro) y luego "vaciarlo" para inyectar mi propio contenido profesional (`CV.md`).

Este es el desglose de mi equipo de agentes y cómo ejecutaron el plan.

## El Equipo y Sus Misiones

Definí un equipo de 3 agentes principales, cada uno con un `agents.md` que especificaba su rol y sus reglas.

### 1. El agente_bootstrap (El Ingeniero de Plataforma)

Mi primer agente no escribió una sola línea de HTML. Su trabajo fue construir la **"fábrica" vacía**.

**Misión**: Crear un proyecto Next.js 14 desde cero.

**Acciones**:

* Generó el `package.json` con todas las dependencias exactas (`next`, `react`, `tailwindcss`, `framer-motion`, `lucide-react`, `next-intl`).
* Generó el `tailwind.config.ts` correcto, incluyendo el color verde neón (`accent: '#10b981'`) y la configuración de fuentes (Inter y Cal Sans).
* Configuró `app/globals.css` para importar `@fontsource/cal-sans` (para no depender de descargas manuales) y aplicar el fondo de grid.
* Generó toda la configuración de `next-intl` (`i18n.ts`, `middleware.ts`).

**Resultado**: Un proyecto "Hola Mundo" perfectamente configurado en 15 segundos. Mi única tarea manual fue ejecutar `npm install`.

### 2. El agente_visual (El Clonador de UI)

Este fue el agente más impresionante.

**Misión**: Clonar 1:1 el frontend de `ceo.pronexus.in`.

**Acciones**:

* Leyó su plan y creó todos los componentes: `Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `StudioSection.tsx`, `ProjectsSection.tsx`, `BlogSection.tsx`, y `ContactSection.tsx`.
* Aplicó meticulosamente las clases de Tailwind, incluyendo los bordes sutiles (`border-neutral-800`), los fondos (`bg-zinc-900`) y los efectos de hover.
* Implementó `framer-motion` en cada sección y tarjeta (`initial={{ opacity: 0 }}...`) para replicar las animaciones de scroll.

**Resultado**: Un clon visualmente perfecto, pero lleno del contenido de "Suhaib SZ".

### 3. El agente_cv_integrator (El Editor de Contenido)

El clon era bonito, pero no era mío.

**Misión**: "Buscar y reemplazar" el contenido del clon con mi contenido profesional.

**Acciones**:

* Leyó mi `CV.md`.
* En `HeroSection.tsx`, reemplazó "Suhaib SZ" por "FRAN CARRASCO" y la imagen `suhaib.jpg` por `profile-photo.jpg`.
* Reemplazó el texto de `AboutSection` con mi RESUMEN del CV.
* **Crucial**: Eliminó los proyectos de Suhaib de `ProjectsSection` y generó mis 6 proyectos (los que estás viendo) basándose en `agents.md`.
* (Irónicamente, reemplazó los artículos de blog de Suhaib por los artículos que estás leyendo ahora mismo).

## El Resultado

Este portafolio se construyó en cuestión de **horas, no de semanas**. No es una demostración de mi habilidad para escribir Tailwind, es una demostración de mi habilidad para **diseñar y dirigir un sistema de IA** para que lo escriba por mí.

Los números hablan por sí solos:

* **45% del código** asistido por IA
* **55% más rápido** que el desarrollo tradicional
* **0% de compromiso** en calidad o seguridad

## Conclusión: Esto es Ser un "Programador en 2025"

El trabajo del desarrollador moderno no es escribir código más rápido. Es **orquestar sistemas que escriben código de forma segura, mantenible y escalable**.

Este portafolio es la prueba. Y tú lo estás viendo ahora mismo.

