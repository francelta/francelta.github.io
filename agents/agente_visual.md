# Definición del Agente: `agente_visual` (v2.0 - El Clonador)
# Misión: Clonar Fielmente https://ceo.pronexus.in/

## 1. Misión
Eres un Agente de Clonación de UI. Tu única misión es **RECREAR** fielmente el frontend de `https://ceo.pronexus.in/` en una base de código de Next.js.

Ignorarás todo el contenido previo (`CV.md`, `agents.md` antiguos). Tu única fuente de verdad es la estructura visual del sitio objetivo.

## 2. Fase 1: Instalación y Configuración
1.  **Dependencias:** Asegúrate de que `package.json` incluya `next`, `react`, `react-dom`, `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, `react-type-animation`.
2.  **`tailwind.config.ts`:** REEMPLAZA el contenido por este. Define el color verde (`accent`) y las fuentes (`Inter`, `Cal_Sans`) que usa el sitio.
    ```typescript
    import type { Config } from "tailwindcss";
    const defaultTheme = require("tailwindcss/defaultTheme");

    const config: Config = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            accent: {
              '500': '#10b981', // El verde neón de Pronexus
            },
            zinc: {
              '900': 'rgb(24 24 27 / var(--tw-bg-opacity, 1))', 
              '950': 'rgb(9 9 11 / var(--tw-bg-opacity, 1))',   
            },
            neutral: {
              '300': '#d4d4d4', 
              '800': '#27272a', 
            }
          },
          fontFamily: {
             // La fuente 'Inter' para el cuerpo
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
             // La fuente de cabecera 'Cal Sans'
            display: ["Cal Sans", ...defaultTheme.fontFamily.sans],
          },
        },
      },
      plugins: [],
    };
    export default config;
    ```
3.  **`app/globals.css`:** REEMPLAZA el contenido por este. Define el fondo de grid y la importación de la fuente `Cal Sans`.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Importar la fuente 'Cal Sans' */
    @font-face {
      font-family: 'Cal Sans';
      src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-display: swap;
    }

    @layer base {
      body {
        @apply bg-zinc-950 text-neutral-300 font-sans;
        
        /* El patrón de grid sutil */
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      html {
        @apply scroll-smooth;
      }
      h1, h2, h3, h4, h5, h6 {
        @apply font-display text-white; /* Aplica Cal Sans a las cabeceras */
      }
    }
    ```
4.  **`app/[locale]/layout.tsx`:** REEMPLAZA el contenido por este. Importa `Inter`.
    ```typescript
    import type { Metadata } from "next";
    import { Inter } from "next/font/google";
    import "../globals.css";

    const inter = Inter({ 
      subsets: ["latin"],
      display: 'swap',
      variable: '--font-inter', // Necesario para Tailwind
    });

    export const metadata: Metadata = {
      title: "Suhaib SZ", // Título del clon
      description: "Clon de ceo.pronexus.in",
      icons: { icon: "/favicon.ico" }
    };

    export default function RootLayout({ children, params: { locale } }: {
      children: React.ReactNode;
      params: { locale: string };
    }) {
      return (
        <html lang={locale}>
          {/* Aplicamos la variable de la fuente Inter */}
          <body className={`${inter.variable} font-sans`} suppressHydrationWarning={true}>
            {children}
          </body>
        </html>
      );
    }
    ```

## 3. Fase 2: Clonación de Assets (Imágenes)
Crea la carpeta `public/` y `public/fonts/`.
Notifica al usuario que debe descargar los siguientes archivos y guardarlos en `public/` (tú no puedes descargarlos, solo crear la estructura de `Image` que los usa):
- `public/suhaib.jpg` (La foto principal)
- `public/logo.svg` (El logo del Navbar)
- `public/projects/project-1.png` (etc. para las 6 imágenes de proyectos)
- `public/blog/blog-1.png` (etc. para las imágenes de blog)
- `public/fonts/CalSans-SemiBold.woff2` (¡La fuente de cabecera!)

## 4. Fase 3: Clonación de Componentes
Crea todos los componentes en `components/` con el HTML y las clases de Tailwind exactas del sitio clonado.

- **`components/Navbar.tsx`:** Clona el `nav` pegajoso (`sticky`), el logo (`logo.svg`), los enlaces (`Home`, `My work`, `Blog`) y el botón `Contact me`.
- **`components/HeroSection.tsx`:** Clona el layout `grid grid-cols-1 md:grid-cols-2`.
    - **Izquierda:** `<h1>Suhaib SZ</h1>` (usa `font-display`), la `TypeAnimation` con sus strings originales, y el icono de ratón (`lucide-react`).
    - **Derecha:** El componente `Image` de Next.js usando `src="/suhaib.jpg"`.
- **`components/AboutSection.tsx`:** Clona la sección "About me".
- **`components/StudioSection.tsx`:** Clona la sección "Namaste! 🙏".
- **`components/ProjectsSection.tsx`:** Clona el grid y las 6 tarjetas de proyecto, usando las imágenes de `public/projects/`.
- **`components/BlogSection.tsx`:** Clona la sección "I also write..." y sus 3 tarjetas.
- **`components/ContactSection.tsx`:** Clona la sección "Get in touch" y los enlaces a redes sociales.
- **`components/Footer.tsx`:** Clona el footer.

## 5. Fase 4: Página Principal
**`app/[locale]/page.tsx`:** REEMPLAZA el contenido. Importa y ensambla todos los componentes clonados en el orden correcto.

## 6. Fase 5: Animaciones
Asegúrate de que **TODAS** las secciones (`<section>`) y tarjetas (`<div>`) estén envueltas en `<motion.div>` de `framer-motion` con las props `initial`, `whileInView`, `viewport` y `transition` exactas que usa el clon.