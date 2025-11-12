# Notas de Reunión - Sistema de Gestión de Tareas

**Fecha:** 12 de Noviembre, 2025  
**Participantes:** Product Owner, Tech Lead, UX Designer, QA Engineer  
**Duración:** 45 minutos

---

## Contexto

Necesitamos construir un sistema de gestión de tareas para equipos distribuidos. El objetivo es mejorar la colaboración y visibilidad del progreso.

---

## Ideas y Requisitos (Brainstorming)

### Autenticación
- Los usuarios tienen que poder registrarse con email y contraseña
- Necesitamos login, obvio
- También sería bueno tener Google OAuth para facilitar el acceso
- Los usuarios deben poder recuperar su contraseña si la olvidan
- Importante: 2FA opcional para cuentas empresariales

### Dashboard Principal
- Cuando entres, deberías ver todas tus tareas pendientes de inmediato
- Sería genial tener filtros: por proyecto, por prioridad, por fecha
- Una vista de calendario también sería útil
- Mostrar el progreso del equipo en un gráfico o algo visual

### Gestión de Tareas
- Crear tareas nuevas con título y descripción
- Poder asignar tareas a otros miembros del equipo
- Cambiar el estado: Todo, In Progress, Done (¿agregar más estados?)
- Añadir fechas límite
- Prioridades: Alta, Media, Baja
- Poder adjuntar archivos (imágenes, PDFs, etc.)
- Comentarios en las tareas para discusión
- Mencionar a otros usuarios con @ para notificarles

### Proyectos
- Agrupar tareas en proyectos
- Cada proyecto tiene un nombre y descripción
- Poder archivar proyectos completados
- Dashboard por proyecto con métricas

### Notificaciones
- Cuando te asignan una tarea
- Cuando alguien te menciona en un comentario
- Recordatorios de tareas próximas a vencer
- Opción de recibir notificaciones por email o solo in-app

### Equipos y Permisos
- Crear equipos/workspaces
- Roles: Admin, Manager, Member
- Los admins pueden invitar usuarios
- Los managers pueden crear proyectos y asignar tareas
- Los members solo pueden gestionar sus propias tareas

### Reportes
- Necesitamos algún tipo de reporte semanal
- Ver qué tareas se completaron
- Métricas de productividad del equipo
- Exportar datos a CSV o PDF

### Mobile
- ¿Hacemos app móvil o solo PWA?
- Decisión pendiente, pero debe ser responsive

---

## Preocupaciones y Notas Técnicas

- **Rendimiento:** Si un proyecto tiene 1000+ tareas, ¿cómo manejamos la carga?
  - Paginación
  - Lazy loading
  - Cache en frontend

- **Tiempo Real:** Las actualizaciones deberían verse en tiempo real (WebSockets?)

- **Búsqueda:** Implementar búsqueda de tareas por texto (Elasticsearch?)

- **Integraciones:** ¿API para integrarse con Slack, GitHub, etc.?

---

## MVP (Fase 1)
Enfocarnos en:
1. Login/Registro básico
2. CRUD de tareas
3. Asignación de tareas
4. Estados básicos (Todo, In Progress, Done)
5. Dashboard simple

Lo demás puede venir en iteraciones posteriores.

---

## Siguiente Paso

Convertir estas notas en historias de usuario formales para empezar el desarrollo.

