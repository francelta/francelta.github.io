# Manifiesto del Equipo de Agentes (agents.md)
# Director de Orquesta: Fran Carrasco

## 1. Misión Principal (El "Por Qué")

Somos un equipo de sub-agentes de IA dirigidos por un "Arquitecto y Piloto" humano (Fran Carrasco). Nuestra misión es construir un portafolio de élite que demuestre el dominio de la orquestación de IA, la ingeniería de software moderna y la ciberseguridad.

Nuestros pilares son:
1.  **Orquestación:** No solo generamos código; ejecutamos una visión estratégica delegando tareas a agentes especializados.
2.  **Calidad por Diseño (TDD):** El desarrollo se impulsa mediante tests (TDD). La IA genera las suites de tests (basadas en GHERKIN) primero.
3.  **Seguridad por Diseño (OWASP):** Asumimos que la IA puede generar código vulnerable. Auditamos activamente el código en busca de vulnerabilidades del OWASP Top 10 y aplicamos el principio de "confianza cero".

## 2. Estándares de Diseño y Estructura (El "Cómo Se Ve")

El portafolio DEBE seguir la estética y estructura de `https://ceo.pronexus.in/`.

- **Estructura:** Aplicación **Single-Page** (SPA). Toda la información principal estará en `app/page.tsx`.
- **Tema:** Modo oscuro (Dark Mode) estricto.
- **Paleta de Colores:**
    - Fondo Principal: Negro o Zinc muy oscuro (ej. `bg-zinc-950`).
    - Texto Principal: Claro (ej. `text-neutral-300` o `text-slate-200`).
    - **Acento (CRÍTICO):** Un color neón/brillante para títulos, bordes y enlaces (ej. `text-cyan-400` o `text-green-400`).
- **Navegación:**
    - Un componente `Navbar` **sticky** (fijo en la parte superior), con fondo semi-transparente (`backdrop-blur`).
    - Los enlaces del Navbar DEBEN apuntar a IDs de sección (ej. `#projects`) para **smooth-scroll**.
- **Secciones Requeridas (en orden):**
    1.  `hero` (Presentación con efecto "typing").
    2.  `about` (Filosofía: "Arquitecto y Piloto").
    3.  `principles` (Metodologías GenAI: TDD, Seguridad, etc.).
    4.  `skills` (Tecnologías y Herramientas).
    5.  `experience` (Experiencia Profesional).
    6.  `agents` (Mi Equipo de Agentes).
    7.  `projects` (Los 6 Proyectos de ejemplo).
    8.  `contact` (Contacto: GitHub, LinkedIn).

## 3. Estándares de Código (El "Cómo Se Construye")

- **Stack Tecnológico:**
    - **Framework:** Next.js (App Router).
    - **Lenguaje:** TypeScript.
    - **Estilos:** Tailwind CSS.
    - **Testing:** Jest o Vitest.
    - **Internacionalización (i18n):** `next-intl` (para `es` y `en`).

- **Nomenclatura (Regla Estricta):**
    - **TypeScript/JavaScript/Python:**
        - Variables y Funciones: DEBEN usar `snake_case`.
        - Clases, Interfaces y Tipos (Type): DEBEN usar `PascalCase`.
    - **Componentes React:**
        - Archivos: `PascalCase.tsx` (ej. `HeroSection.tsx`).
        - Nombres de Componentes: `PascalCase`.
    - **Archivos de Lógica/Servicios:**
        - `kebab-case.ts` (ej. `user-service.ts`).

- **Documentación:**
    - Toda función pública, prop de componente (`interface Props`), o exportación de módulo DEBE incluir un bloque de comentarios JSDoc/TSDoc (`@param`, `@returns`).

## 4. Principios de Seguridad (Las "Defensas")

- **Confianza Cero:** Nunca confiar en la entrada del usuario. Validar, sanear y escapar toda entrada de API y formularios.
- **No Secretos:** Ninguna clave (API, GitHub PATs) debe estar hardcodeada. Usar variables de entorno (`.env.local`).
- **Auditoría OWASP:** Todo código de backend (API routes, server actions) debe ser revisado en busca de Inyección, Broken Access Control y XSS.

## 5. Catálogo de Agentes (El "Equipo")

Este manifiesto es la fuente de verdad para los siguientes agentes:

- **`agente_cv_integrator`:** Lee `CV.md` y puebla las secciones del portafolio (About, Skills, Experience).
- **`agente_i18n`:** Refactoriza el código para ser multilingüe (es/en) usando `next-intl`.
- **`agente_deploy_main`:** Gestiona el despliegue del portafolio principal.
- **`agente_generador_de_proyectos`:** Genera los 6 proyectos de ejemplo en subcarpetas, cada uno con su propio `README.md` y código de demostración.