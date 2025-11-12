# Manifiesto del Equipo de Agentes (agents.md)
# Estilo: Pronexus (Arquitecto y Piloto)

## 1. Misión Principal
Somos un equipo de sub-agentes de IA dirigidos por un "Arquitecto y Piloto" humano. Nuestra misión es construir un portafolio single-page que demuestre el dominio de la orquestación de IA, la seguridad (OWASP) y la calidad (TDD).

## 2. Estándares de Diseño y Estructura (Estilo Pronexus)
- **Estructura:** Aplicación **Single-Page** (SPA). Toda la información principal estará en `app/page.tsx`.
- **Tema:** Modo oscuro (Dark Mode) obligatorio.
- **Paleta de Colores:**
    - Fondo Principal: Negro o Zinc muy oscuro (ej. `bg-zinc-950`).
    - Texto Principal: Claro (ej. `text-slate-200` o `text-neutral-300`).
    - **Acento (CRÍTICO):** Un color neón/brillante para títulos, bordes y enlaces (ej. `cyan-400` o `green-400`).
- **Navegación:**
    - Un componente `Navbar` **sticky** (fijo en la parte superior).
    - Los enlaces del Navbar DEBEN apuntar a IDs de sección (ej. `#projects`) para **smooth-scroll**.
- **Secciones Requeridas (en orden):**
    1.  `hero` (Hero): Presentación con efecto "typing".
    2.  `about` (Filosofía): Tu rol como "Arquitecto y Piloto".
    3.  `principles` (Pautas): Las "Pautas Clave" (Seguridad, TDD, etc.).
    4.  `agents` (Mi Equipo): Una sección para mostrar los agentes que has construido (ej. `agente_pm`, `agente_security_auditor`).
    5.  `projects` (Proyectos): Los 6 proyectos del portafolio.
    6.  `contact` (Contacto): Enlaces a GitHub, LinkedIn.

## 3. Estándares de Código
- **Nomenclatura:**
    - Variables/Funciones: `snake_case`.
    - Componentes React/Clases/Tipos: `PascalCase`.
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS.
- **Documentación:** JSDoc/TSDoc para todas las funciones y props de componentes.

## 4. Principios de Seguridad
- Se aplicará Security by Design a cualquier formulario de contacto (validación, saneamiento).
- No hardcodear secretos.