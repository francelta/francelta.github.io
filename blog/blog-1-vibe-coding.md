# Más Allá del "Vibe Coding": Por Qué Dejé de Escribir Código y Empecé a Dirigir Agentes

**Autor:** Fran Carrasco  
**Fecha:** 15 de Octubre, 2024  
**Tiempo de lectura:** 8 minutos  
**Categoría:** Filosofía

---

## El Problema del "Vibe Coding"

"Vibe coding". Es el término para describir a un desarrollador que pide a una IA que "haga una app de tareas" y acepta ciegamente el resultado. Es rápido, es fácil y es superficial. 

El "vibe coding" está creando una generación de código spaghetti que es funcional pero frágil. Mi trabajo ya no es pedir código; mi trabajo es construir, entrenar y dirigir un equipo de agentes de IA especializados para construirlo con estándares, seguridad y calidad.

---

## La Diferencia Entre Teclear y Orquestar

En 2019, cuando empecé mi carrera profesional en Check-in scan, el 100% del código que escribía venía de mis dedos. En 2024, ese porcentaje ha bajado al 55%. El otro 45% lo genera una IA.

Pero eso no me hace menos desarrollador. Me hace un **Arquitecto**.

### Antes (El Desarrollador Tradicional):
- Escribir líneas de código
- Depurar errores sintácticos
- Buscar documentación en StackOverflow
- Implementar soluciones manualmente

### Ahora (El Arquitecto y Piloto):
- Definir la arquitectura y los estándares
- Orquestar agentes especializados (PM, Testing, Seguridad)
- Auditar el código generado
- Aplicar Security by Design y TDD

---

## Mi Rol Como "Piloto de IA"

No soy un prompt engineer. Los prompt engineers están atrapados en el "vibe coding". Escriben un prompt bonito, obtienen código, lo copian y pegan, y esperan que funcione.

Yo actúo como un **Arquitecto y Piloto** que:

### 1. Define el Contexto
Antes de que cualquier agente escriba código, defino el contexto en archivos como `agents.md` y `context/`:
- Estándares de código (snake_case, PascalCase)
- Esquema de base de datos
- Requisitos de seguridad (OWASP Top 10)
- Arquitectura del sistema

### 2. Orquesta Sub-Agentes
No uso "una IA". Dirijo un equipo de sub-agentes especializados:
- **agente_pm**: Convierte requisitos en tickets con criterios GERKIN
- **agente_testing**: Genera suites de 40+ tests por feature
- **agente_security_auditor**: Audita vulnerabilidades OWASP
- **agente_visual**: Clona y adapta interfaces

Cada uno tiene un rol específico, como mini-J.A.R.V.I.S. especializados.

### 3. Aplica TDD y Security by Design
La IA puede escribir código rápido, pero no sabe si es **seguro** o **mantenible**. Por eso:
- Primero escribo (o hago que la IA escriba) los tests
- Luego la IA genera el código para pasar esos tests
- Finalmente audito el resultado buscando vulnerabilidades

---

## El Futuro No Es El Desarrollador 10x

El desarrollador "10x" (que escribe 10 veces más código que el promedio) es un mito. El futuro es el desarrollador que puede **dirigir 10 agentes de IA simultáneamente**.

Esto requiere:
- Fundamentos sólidos de ingeniería de software
- Conocimiento de seguridad (OWASP)
- Experiencia en arquitectura
- Capacidad de auditar código rápidamente

No puedes "dirigir" lo que no entiendes.

---

## Mi Métrica de Éxito

Antes de adoptar esta metodología, mi velocidad de desarrollo era X. Ahora es **55% más rápida**.

Pero más importante que la velocidad:
- **0 vulnerabilidades críticas** en producción en los últimos 6 meses
- **40+ tests por feature**, generados automáticamente
- **Código mantenible** que sigue estándares
- **Documentación completa** en cada función

---

## Conclusión: La Evolución del Desarrollador

El trabajo de un desarrollador ha evolucionado 3 veces en la historia:

1. **Era 1 (1950s-1970s):** Escribir código en tarjetas perforadas y ensamblador
2. **Era 2 (1980s-2020s):** Escribir código en lenguajes de alto nivel
3. **Era 3 (2024+):** Dirigir agentes que escriben código

No estamos reemplazando a los desarrolladores. Estamos **elevando** el rol del desarrollador de "teclear" a "arquitectar".

Si sigues "vibe coding", te quedarás atrás. Si aprendes a orquestar, te convertirás en indispensable.

---

**¿Quieres aprender más sobre mi metodología?** Lee mi siguiente artículo: [La IA como "Becario" Vulnerable: Mi Flujo TDD y OWASP](#)

**Conéctate conmigo:**
- GitHub: [github.com/francelta](https://github.com/francelta)
- LinkedIn: [Francisco José Carrasco Guerrero](https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/)
- Email: francelta@gmail.com

