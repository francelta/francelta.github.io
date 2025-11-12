# 📝 Artículos del Blog

Esta carpeta contiene el contenido completo de los 3 artículos del blog del portafolio.

## Artículos Disponibles

### 1. **Más Allá del "Vibe Coding"** (`blog-1-vibe-coding.md`)
**El Manifiesto - El "Por Qué"**

- **Tema:** Filosofía de desarrollo con IA
- **Mensaje clave:** El trabajo ya no es teclear, es orquestar agentes
- **Público objetivo:** Desarrolladores que usan IA pero sin metodología
- **CTA:** Invita a leer el siguiente artículo sobre metodología

### 2. **La IA como "Becario" Vulnerable** (`blog-2-tdd-owasp.md`)
**La Metodología - El "Cómo"**

- **Tema:** TDD + OWASP + IA = Security by Design
- **Mensaje clave:** La IA genera vulnerabilidades, mi trabajo es auditarla
- **Público objetivo:** Desarrolladores preocupados por la seguridad
- **CTA:** Invita a leer el caso de estudio del portafolio

### 3. **Caso de Estudio: Este Portafolio** (`blog-3-caso-estudio.md`)
**La Prueba - El "Qué"**

- **Tema:** Cómo construí este mismo portafolio con agentes
- **Mensaje clave:** Esto es programar en 2025 (dirigir, no teclear)
- **Público objetivo:** Desarrolladores escépticos que quieren pruebas
- **CTA:** Invita a contactar para proyectos

---

## Implementación en el Sitio

Los títulos y excerpts están en `components/BlogSection.tsx`:

```typescript
const blog_posts = [
  {
    title: 'Más Allá del "Vibe Coding": Por Qué Dejé de Escribir Código...',
    excerpt: 'El 45% del código ya lo escribe una IA. El trabajo ya no es teclear...',
    category: 'Filosofía',
  },
  // ... otros artículos
];
```

---

## Próximos Pasos

Para publicar estos artículos:

1. **Opción A: Blog Integrado**
   - Crear rutas dinámicas: `app/[locale]/blog/[slug]/page.tsx`
   - Usar `next-mdx-remote` o `contentlayer` para renderizar MDX
   - Agregar SEO con metadata

2. **Opción B: Blog Externo**
   - Publicar en Medium, Dev.to o Hashnode
   - Actualizar los links en `BlogSection.tsx`
   - Mantener los excerpts como teaser

3. **Opción C: Sitio Estático Separado**
   - Crear un blog con Astro o Next.js
   - Subir a un subdominio (blog.francarrasco.dev)
   - Linkear desde el portafolio

---

## Métricas de Contenido

| Artículo | Palabras | Tiempo Lectura | Nivel |
|----------|----------|----------------|-------|
| Blog 1 - Vibe Coding | ~1,500 | 8 min | Introductorio |
| Blog 2 - TDD/OWASP | ~2,200 | 12 min | Intermedio |
| Blog 3 - Caso Estudio | ~1,800 | 10 min | Técnico |

**Total:** ~5,500 palabras de contenido original

---

## SEO Keywords (Para cada artículo)

### Blog 1:
- vibe coding
- desarrollo con IA
- arquitecto de IA
- orquestación de agentes
- programador 2025

### Blog 2:
- TDD con IA
- OWASP Top 10
- vulnerability as a service
- security by design
- IA segura

### Blog 3:
- cursor.ia
- agentes especializados
- next.js portfolio
- desarrollo asistido por IA
- caso de estudio

---

## Licencia

Contenido © 2024 Fran Carrasco. Todos los derechos reservados.

