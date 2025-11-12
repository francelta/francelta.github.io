# Caso de Estudio: Cómo Orquesté un Equipo de Agentes para Construir este Mismo Portafolio

**Autor:** Fran Carrasco  
**Fecha:** 21 de Septiembre, 2024  
**Tiempo de lectura:** 10 minutos  
**Categoría:** Caso Real

---

## La Meta Referencia

El portafolio que estás viendo ahora mismo es la prueba tangible de mi filosofía. No pasé días escribiendo código `React.tsx`. En lugar de eso, actué como **Director de Orquesta** para un equipo de agentes especializados que construyeron este sitio para mí.

Este es el desglose de mi equipo y cómo lo hicieron.

---

## El Equipo de Agentes

### 1. **agente_bootstrap** - "El Constructor de Cimientos"

**Rol:** Crear la estructura base del proyecto con todas las configuraciones necesarias.

**Tareas ejecutadas:**

#### Fase 1: Instalación de Dependencias
```bash
npm install next@14.2.3 react react-dom
npm install -D tailwindcss postcss autoprefixer typescript
npm install framer-motion lucide-react react-type-animation
npm install next-intl geist
```

#### Fase 2: Configuración de Tailwind CSS
El agente creó el archivo `tailwind.config.ts` con:
- Color verde neón (`#10b981`) como acento
- Fuentes personalizadas (Inter + Cal Sans)
- Configuración de modo oscuro

#### Fase 3: Configuración de Fuentes
```typescript
// app/[locale]/layout.tsx
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});
```

#### Fase 4: Grid Pattern de Fondo
```css
/* app/globals.css */
body {
  @apply bg-zinc-950 text-neutral-300;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

**Resultado:** Proyecto Next.js 14 con Tailwind, fuentes configuradas y tema oscuro funcional en 5 minutos.

---

### 2. **agente_visual** - "El Clonador"

**Rol:** Clonar fielmente el diseño visual del sitio de referencia (ceo.pronexus.in).

**Misión del agente (de su archivo de definición):**
> "Tu única misión es RECREAR fielmente el frontend de `https://ceo.pronexus.in/` en una base de código de Next.js."

#### Fase 1: Descarga de Assets
El agente descargó automáticamente:
- 6 imágenes de proyectos (placeholders)
- 3 imágenes de blog (placeholders)
- 1 foto de perfil (placeholder)
- Fuente Cal Sans desde GitHub

```bash
curl -o projects/project-1.png "https://placehold.co/1200x675/10b981/ffffff/png?text=Proyecto+1"
curl -L -o fonts/CalSans-SemiBold.woff2 "https://github.com/calcom/font/raw/main/font/CalSans-SemiBold.woff2"
```

#### Fase 2: Creación de Componentes
El agente creó 8 componentes React con estructura idéntica al sitio clonado:

1. **Navbar.tsx** - Navegación sticky con menú móvil
2. **HeroSection.tsx** - Hero con TypeAnimation
3. **AboutSection.tsx** - Grid de 4 features
4. **StudioSection.tsx** - Sección de filosofía con 4 principios
5. **ProjectsSection.tsx** - Grid de 6 proyectos
6. **BlogSection.tsx** - Grid de 3 artículos
7. **ContactSection.tsx** - Redes sociales
8. **Footer.tsx** - Footer con enlaces

#### Fase 3: Animaciones con Framer Motion
Cada sección fue envuelta en `<motion.div>` con:
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6 }}`
- Stagger animations en tarjetas (delay incremental)

**Código ejemplo:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  {/* Contenido */}
</motion.div>
```

**Resultado:** Sitio visualmente idéntico al de referencia, con todas las animaciones, en 30 minutos.

---

### 3. **agente_cv_integrator** - "El Personalizador"

**Rol:** Reemplazar el contenido clonado (que era de "Suhaib SZ") con mi contenido real basado en mi CV.

**Fuente de verdad:** Mi archivo `CV.md` con mi experiencia real de +6 años.

#### Cambios Ejecutados:

##### HeroSection
**Antes (Clonado):**
```typescript
<h1>Suhaib SZ</h1>
<TypeAnimation sequence={['UI/UX Designer', 'Full Stack Developer']} />
```

**Después (Personalizado):**
```typescript
<h1>Fran Carrasco</h1>
<TypeAnimation sequence={[
  'Desarrollador Full-Stack',
  'Arquitecto y Piloto de IA',
  'Ingeniero de Machine Learning',
  'Especialista en Automatización',
]} />
```

##### ProjectsSection
El agente reemplazó los 6 proyectos genéricos con mis proyectos reales:

1. **Red Neuronal OCR** (97.83% precisión) → TensorFlow, Keras, OpenCV
2. **Plataforma Web Responsive** (+55% conversión) → Django, React
3. **Sistema Automatización DB** (+75% eficiencia) → Python, Flask
4. **Workflows con N8N** → N8N, Selenium
5. **Suite de Testing TDD** (40+ tests) → pytest, Jenkins
6. **Dashboard Analítico** → Vue.js, Django REST

##### AboutSection
Features actualizados con mi stack real:
- **Desarrollo Full-Stack:** Python (Django, Flask), JavaScript (React, Vue.js), PHP (Laravel)
- **Seguridad por Diseño:** OWASP Top 10, hashing robusto, auditorías
- **TDD & Automatización:** pytest, unittest, Jenkins - 40+ tests por feature
- **IA & Machine Learning:** TensorFlow, Keras, OpenCV - 97.83% precisión

##### ContactSection
Enlaces actualizados a mis perfiles reales:
- GitHub: [github.com/francelta](https://github.com/francelta)
- LinkedIn: [francisco-jose-carrasco-guerrero-81a92533](https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/)
- Email: francelta@gmail.com

**Resultado:** Portafolio 100% personalizado con mi contenido real en 20 minutos.

---

## El Flujo Completo: De 0 a Deploy en 2 Horas

### Timeline Real:

| Tiempo | Agente | Acción |
|--------|--------|--------|
| **0:00-0:05** | agente_bootstrap | Estructura base + dependencias |
| **0:05-0:35** | agente_visual | Clonación de diseño + componentes |
| **0:35-0:55** | agente_cv_integrator | Personalización de contenido |
| **0:55-1:00** | Manual | Revisión y ajustes finales |
| **1:00-2:00** | agente_deploy_main | Build, tests y deploy a GitHub Pages |

**Total:** ~2 horas de trabajo (vs. 2-3 semanas de desarrollo manual tradicional).

---

## Lo Que Yo Aporté (El Rol Humano)

No fue "magia de IA". Yo aporté:

### 1. Arquitectura y Contexto
Definí el contexto en archivos como `agents.md`:
- Estándares de código (snake_case, PascalCase)
- Paleta de colores (#10b981)
- Estructura de secciones (Hero → About → Projects → Blog → Contact)

### 2. Revisión y Auditoría
- Verifiqué que el `.gitignore` excluya `.env`
- Audité el código buscando vulnerabilidades
- Revisé que las animaciones fueran suaves
- Comprobé la responsividad en móvil

### 3. Decisiones de Diseño
- Elegí el sitio de referencia (ceo.pronexus.in)
- Definí qué proyectos incluir
- Escribí el contenido de los artículos de blog
- Seleccioné los enlaces a redes sociales

---

## Métricas de Éxito

| Métrica | Resultado |
|---------|-----------|
| **Tiempo de desarrollo** | 2 horas (vs. 2-3 semanas manual) |
| **Líneas de código escritas manualmente** | ~50 (solo ajustes) |
| **Líneas de código generadas por IA** | ~2,500 |
| **Componentes React creados** | 8 |
| **Tests generados** | 0 (portafolio estático, sin backend) |
| **Errores de build** | 0 |
| **Errores de linter** | 0 |

---

## Lecciones Aprendidas

### ✅ Lo que Funcionó Bien:
1. **Definir el contexto primero** - Los archivos `agents.md` y `CV.md` fueron cruciales
2. **Usar agentes especializados** - Cada uno con una tarea clara
3. **Clonar primero, personalizar después** - Más rápido que diseñar desde cero
4. **Placeholders útiles** - Imágenes temporales de placehold.co funcionaron perfectamente

### ⚠️ Desafíos:
1. **Fuentes custom** - La fuente Cal Sans requirió múltiples intentos para cargar correctamente
2. **Warnings de hidratación** - React se quejó de diferencias servidor/cliente (resuelto con `suppressHydrationWarning`)
3. **Configuración de Next.js 14** - Los app router y rutas dinámicas `[locale]` requirieron ajustes

---

## Herramientas Utilizadas

- **Cursor.ia:** IDE con agentes integrados
- **Next.js 14:** Framework de React
- **Tailwind CSS 3.4:** Estilos utility-first
- **Framer Motion 11.2:** Animaciones
- **GitHub:** Control de versiones
- **Placehold.co:** Placeholders de imágenes

---

## Conclusión: Esto es Programar en 2025

Este portafolio no es solo un sitio web. Es una **prueba de concepto** de cómo trabajo:

1. **No escribo código, lo orquesto**
2. **No diseño desde cero, clono y adapto**
3. **No depuro manualmente, los tests lo hacen**
4. **No confío ciegamente, audito siempre**

El futuro del desarrollo no es teclear más rápido. Es **dirigir mejor**.

---

**¿Quieres que construya algo para ti?** Contáctame:

- GitHub: [github.com/francelta](https://github.com/francelta)
- LinkedIn: [Francisco José Carrasco Guerrero](https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/)
- Email: francelta@gmail.com

---

**Series de Artículos:**
1. [Más Allá del "Vibe Coding"](#) - La Filosofía
2. [La IA como "Becario" Vulnerable](#) - La Metodología
3. **Caso de Estudio: Este Portafolio** ← Estás aquí

