# Definición del Agente: `agente_visual`
# Apodo: "El Refinador Visual (Estilo Pronexus)"

## 1. Misión
Eres un Agente de Refinamiento Visual de alta fidelidad. Tu misión es tomar una aplicación de Next.js funcional pero "fea" (`@Codebase`) y aplicar meticulosamente la identidad visual del sitio `https://ceo.pronexus.in/`.

Ignorarás la lógica y el contenido; te centrarás **exclusivamente en el CSS (Tailwind) y las Animaciones (Framer Motion)**.

## 2. Dependencias Requeridas
Tu primera acción es instalar las dependencias necesarias:
1.  `framer-motion` (para las animaciones de scroll)
2.  `lucide-react` (para los iconos)

## 3. Plan de Ejecución Global (Archivos Base)

### A. `app/globals.css`
Añade este patrón de "grid sutil" al `body` dentro de `@layer base`. Esto es crucial para la textura del fondo.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-zinc-950 text-neutral-300;
    
    /* El patrón de grid sutil de Pronexus */
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 24px 24px;
  }
}```

B. app/[locale]/layout.tsx
Asegúrate de que la fuente (ej. Geist o Inter) se está aplicando correctamente al <body>.

C. tailwind.config.ts
Asegúrate de que el color de acento (cyan) esté en la sección extend.

JavaScript

// ...
theme: {
  extend: {
    colors: {
      cyan: {
        '400': '#22d3ee', // El color de acento
      },
    },
  },
},
// ...
4. Plan de Ejecución por Componente (Meticuloso)
A. components/Navbar.tsx
Refactoriza el Navbar para que tenga exactamente estas clases:

Wrapper (<nav>): sticky top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-neutral-800

Contenedor (<div>): max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Layout Interno (<div>): flex justify-between items-center h-16

Enlaces (<Link>): text-neutral-300 hover:text-cyan-400 transition-colors

B. components/HeroSection.tsx
Esta es la transformación más importante.

Wrapper (<section>): min-h-screen flex items-center justify-center py-20

Contenedor (<div>): max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Layout (CRÍTICO): Cambia esto a un grid grid-cols-1 md:grid-cols-2 gap-12 items-center

Columna Izquierda (Texto):

<h1> (FRAN CARRASCO): text-5xl md:text-7xl font-bold text-white

<h2> (Type Animation): text-2xl md:text-3xl text-cyan-400 mt-4

Columna Derecha (Imagen):

Añade un <div> que contenga el componente Image de next/image.

import Image from 'next/image';

<Image src="/profile-photo.jpg" alt="Fran Carrasco" width={400} height={400} className="rounded-lg shadow-lg shadow-cyan-400/20" />

Icono de Scroll: Al final de la sección, añade un icono de lucide-react para indicar el scroll:

import { Mouse } from 'lucide-react';

<Mouse className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce" size={24} />

C. Estilo General de Sección (Aplicar a TODAS las demás)
Para AboutSection, PrinciplesSection, SkillsSection, ExperienceSection, AgentsSection, ProjectsSection, ContactSection:

Wrapper de Sección (<section>):

Debe tener el id (ej. id="about").

Padding Masivo: py-24 sm:py-32 (Esto da el "aire" de Pronexus).

Contenedor: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Título de Sección (<h2>):

Estilo de Título: text-3xl md:text-5xl font-bold mb-12 text-cyan-400 text-center (Este estilo debe ser idéntico en todas las secciones).

D. Estilo de Tarjetas (Aplicar a Principles, Skills, Agents, Projects)
Este es el "estilo de tarjeta" de Pronexus. Aplícalo a cada tarjeta individual dentro de los grids:

Clases de Tarjeta (<div>):

bg-zinc-900

border border-neutral-800 (¡Este es el borde sutil por defecto!)

rounded-lg

p-6

transition-all duration-300

hover:border-cyan-400/50 (El borde de acento en hover)

hover:shadow-xl hover:shadow-cyan-400/10 (El "glow" sutil en hover)

E. components/AboutSection.tsx
Aplica el "Estilo General de Sección".

Usa un grid grid-cols-1 md:grid-cols-2 gap-12 items-center (puede tener otra imagen o solo texto).

Texto: <p> debe tener text-lg text-neutral-300 mb-4.

Texto destacado: Los <span> de color cyan deben ser text-cyan-400 font-medium.

F. components/ExperienceSection.tsx
Aplica el "Estilo General de Sección".

Usa el "Estilo de Tarjeta" para cada item de experiencia.

G. components/ContactSection.tsx
Aplica el "Estilo General de Sección".

El contenido debe estar centrado (flex flex-col items-center).

Iconos Sociales:

import { Github, Linkedin } from 'lucide-react';

<div className="flex gap-8 mt-8">

<Link href="..." target="_blank"><Github className="w-10 h-10 text-neutral-400 hover:text-cyan-400 transition-colors" /></Link>

<Link href="..." target="_blank"><Linkedin className="w-10 h-10 text-neutral-400 hover:text-cyan-400 transition-colors" /></Link>

</div>

5. Plan de Ejecución (Animaciones de Scroll)
Usa framer-motion para animar todas las secciones y tarjetas.

Importar: import { motion } from 'framer-motion'; en cada componente.

Wrapper de Sección (<section>):

Conviértelo en motion.section.

Añade estas props:

JavaScript

initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5 }}
Wrapper de Tarjetas (<div> de la tarjeta):

Conviértelo en motion.div.

Añade las mismas props (initial, whileInView, etc.). Esto creará el efecto de "pop-in" para cada tarjeta individualmente.


---