# Definición del Agente: `agente_bootstrap`
# Misión: Crear la Estructura de Proyecto Next.js desde Cero

## 1. Misión
Eres un Agente "Bootstrap". Tu misión es crear la estructura de archivos y configuración completa para un proyecto Next.js 14+ (App Router, Tailwind) en la carpeta vacía actual.

NO estás clonando `ceo.pronexus.in/` todavía. Estás construyendo el "contenedor" para el clon.

## 2. Plan de Ejecución (Creación de Archivos)

### Fase 1: Archivos de Configuración Raíz
Crea los siguientes archivos en la raíz del proyecto:

**1. `package.json`**
(Incluye la fuente `@fontsource/cal-sans` como dependencia)
{
  "name": "francelta-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@fontsource/cal-sans": "^5.0.20",
    "@next/font": "^14.2.3",
    "framer-motion": "^11.2.6",
    "lucide-react": "^0.379.0",
    "next": "14.2.3",
    "next-intl": "^3.15.0",
    "react": "^18",
    "react-dom": "^18",
    "react-type-animation": "^3.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

**2. `tailwind.config.ts`**
(Define 'Cal Sans' como la fuente 'display')
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
         sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
         display: ["Cal Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;

**3. `postcss.config.mjs`**
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

**4. `next.config.mjs`**
(Configurado para `next-intl`)
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
 
const nextConfig = {
  reactStrictMode: true,
};
 
export default withNextIntl(nextConfig);

**5. `tsconfig.json`**
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "next.config.mjs", "postcss.config.mjs"],
  "exclude": ["node_modules"]
}

### Fase 2: Estructura de Carpetas `app/`
Crea las siguientes carpetas y archivos:

**1. `app/globals.css`**
(Importa 'Cal Sans' desde el paquete npm, elimina el `@font-face` manual)
@import "@fontsource/cal-sans";

@tailwind base;
@tailwind components;
@tailwind utilities;

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

**2. `app/[locale]/layout.tsx`**
(La versión correcta con `Inter`)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // Necesario para Tailwind
});

export const metadata: Metadata = {
  title: "Fran Carrasco - Portafolio",
  description: "Portafolio de desarrollo impulsado por IA",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

**3. `app/[locale]/page.tsx`**
(Una página "Hola Mundo" temporal para probar que funciona)
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Proyecto Iniciado</h1>
        <p className="mt-4 text-2xl text-accent-500">
          Si esto es VERDE, el bootstrap fue un éxito.
        </IA>
      </div>
    </main>
  );
}

### Fase 3: Archivos de Configuración (i18n y Assets)
Crea estos archivos en la raíz:

**1. `i18n.ts`**
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  return {
    messages: {}
  };
});

**2. `middleware.ts`**
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
});
 
export const config = {
  matcher: ['/', '/(es|en)/:path*']
};

**3. `.gitignore`**
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.production.local
.env.test.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

### Fase 4: Creación de Carpetas de Assets
Crea estas carpetas vacías para que puedas llenarlas:
- `public/`
- `components/`
- `messages/`

## 3. Notificación al Usuario
Al final, notifícame que debo:
1.  **Correr `npm install`** (o `yarn install`) en mi terminal.
2.  **Correr `npm run dev`** para ver la página de prueba.