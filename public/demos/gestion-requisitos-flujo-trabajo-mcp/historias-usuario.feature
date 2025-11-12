# language: es
Característica: Sistema de Gestión de Tareas

  Como equipo distribuido
  Quiero un sistema de gestión de tareas
  Para mejorar la colaboración y visibilidad del progreso

# ============================================================
# AUTENTICACIÓN Y REGISTRO
# ============================================================

Escenario: Registro exitoso de nuevo usuario
  Dado que soy un usuario nuevo
  Cuando accedo a la página de registro
  Y proporciono un email válido "usuario@ejemplo.com"
  Y proporciono una contraseña segura "Pass123!@#"
  Y confirmo la contraseña
  Y acepto los términos y condiciones
  Entonces mi cuenta debe ser creada exitosamente
  Y debo recibir un email de verificación
  Y debo ser redirigido al dashboard

Escenario: Registro fallido por email duplicado
  Dado que existe un usuario con email "usuario@ejemplo.com"
  Cuando intento registrarme con el mismo email
  Entonces debo ver el mensaje "Este email ya está registrado"
  Y no debo ser registrado

Escenario: Login exitoso con credenciales válidas
  Dado que soy un usuario registrado con email "usuario@ejemplo.com"
  Y mi contraseña es "Pass123!@#"
  Cuando accedo a la página de login
  Y proporciono mis credenciales correctas
  Entonces debo ser autenticado exitosamente
  Y debo ver mi dashboard personal

Escenario: Login fallido por contraseña incorrecta
  Dado que soy un usuario registrado con email "usuario@ejemplo.com"
  Cuando intento hacer login con contraseña incorrecta
  Entonces debo ver el mensaje "Credenciales incorrectas"
  Y debo permanecer en la página de login

Escenario: Login con Google OAuth
  Dado que soy un usuario no registrado
  Cuando hago clic en "Continuar con Google"
  Y autorizo el acceso a mi cuenta de Google
  Entonces mi cuenta debe ser creada automáticamente
  Y debo ser autenticado exitosamente
  Y debo ver mi dashboard personal

Escenario: Recuperación de contraseña
  Dado que soy un usuario registrado con email "usuario@ejemplo.com"
  Cuando hago clic en "¿Olvidaste tu contraseña?"
  Y proporciono mi email
  Entonces debo recibir un email con un enlace de recuperación
  Y el enlace debe tener validez de 1 hora
  Cuando hago clic en el enlace
  Y proporciono una nueva contraseña
  Entonces mi contraseña debe ser actualizada
  Y debo poder hacer login con la nueva contraseña

# ============================================================
# DASHBOARD Y VISUALIZACIÓN
# ============================================================

Escenario: Ver dashboard con tareas pendientes
  Dado que soy un usuario autenticado
  Y tengo 5 tareas asignadas
  Cuando accedo a mi dashboard
  Entonces debo ver una lista de mis tareas pendientes
  Y debo ver el título de cada tarea
  Y debo ver el estado de cada tarea
  Y debo ver la prioridad de cada tarea
  Y debo ver la fecha límite si existe

Escenario: Filtrar tareas por proyecto
  Dado que estoy en mi dashboard
  Y tengo tareas en 3 proyectos diferentes
  Cuando selecciono el filtro "Proyecto"
  Y elijo "Proyecto Marketing"
  Entonces solo debo ver tareas del proyecto seleccionado
  Y el contador debe mostrar el número correcto de tareas

Escenario: Filtrar tareas por prioridad
  Dado que estoy en mi dashboard
  Y tengo tareas con diferentes prioridades
  Cuando selecciono el filtro "Prioridad Alta"
  Entonces solo debo ver tareas de prioridad alta
  Y las tareas deben estar ordenadas por fecha límite

Escenario: Ver progreso del equipo
  Dado que soy miembro de un equipo
  Cuando accedo a la sección "Progreso del Equipo"
  Entonces debo ver un gráfico con las tareas completadas vs pendientes
  Y debo ver el porcentaje de completitud del proyecto
  Y debo ver la lista de miembros activos

# ============================================================
# GESTIÓN DE TAREAS (CRUD)
# ============================================================

Escenario: Crear una nueva tarea
  Dado que soy un usuario autenticado
  Cuando hago clic en "Nueva Tarea"
  Y proporciono el título "Diseñar landing page"
  Y proporciono la descripción "Crear mockups para la nueva landing"
  Y selecciono el proyecto "Marketing"
  Y establezco la prioridad como "Alta"
  Y establezco la fecha límite para "2025-11-20"
  Y hago clic en "Crear"
  Entonces la tarea debe ser creada exitosamente
  Y debo ver la tarea en mi lista
  Y la tarea debe tener estado "Todo"

Escenario: Asignar tarea a un miembro del equipo
  Dado que soy un Manager o Admin
  Y existe una tarea "Diseñar landing page"
  Cuando abro los detalles de la tarea
  Y hago clic en "Asignar a"
  Y selecciono al usuario "María García"
  Entonces la tarea debe ser asignada a María
  Y María debe recibir una notificación
  Y la tarea debe aparecer en el dashboard de María

Escenario: Cambiar el estado de una tarea
  Dado que tengo una tarea asignada en estado "Todo"
  Cuando abro la tarea
  Y cambio el estado a "In Progress"
  Entonces el estado debe actualizarse en tiempo real
  Y otros usuarios deben ver el cambio inmediatamente
  Y la fecha de inicio debe registrarse

Escenario: Marcar tarea como completada
  Dado que tengo una tarea en estado "In Progress"
  Cuando cambio el estado a "Done"
  Entonces la tarea debe marcarse como completada
  Y la fecha de completitud debe registrarse
  Y el creador de la tarea debe recibir una notificación
  Y la tarea debe moverse a la sección "Completadas"

Escenario: Editar una tarea existente
  Dado que soy el creador de una tarea
  Cuando abro los detalles de la tarea
  Y hago clic en "Editar"
  Y modifico el título a "Diseñar nueva landing page responsive"
  Y cambio la prioridad a "Media"
  Y guardo los cambios
  Entonces los cambios deben ser guardados
  Y la tarea debe mostrar el nuevo título y prioridad
  Y debe registrarse el historial de cambios

Escenario: Eliminar una tarea
  Dado que soy el creador de una tarea o un Admin
  Cuando abro los detalles de la tarea
  Y hago clic en "Eliminar"
  Y confirmo la eliminación
  Entonces la tarea debe ser movida a la papelera
  Y no debe aparecer en el dashboard
  Y debe poder ser recuperada dentro de 30 días

Escenario: Adjuntar archivos a una tarea
  Dado que estoy editando una tarea
  Cuando hago clic en "Adjuntar archivo"
  Y selecciono un archivo "mockup.png" (2MB)
  Entonces el archivo debe subirse exitosamente
  Y debe aparecer en la lista de adjuntos
  Y otros usuarios deben poder descargarlo

# ============================================================
# COMENTARIOS Y COLABORACIÓN
# ============================================================

Escenario: Añadir comentario a una tarea
  Dado que estoy viendo los detalles de una tarea
  Cuando escribo un comentario "Necesito más contexto sobre los colores"
  Y hago clic en "Comentar"
  Entonces el comentario debe aparecer en la tarea
  Y debe mostrar mi nombre y foto
  Y debe mostrar la fecha y hora del comentario

Escenario: Mencionar a un usuario en un comentario
  Dado que estoy escribiendo un comentario en una tarea
  Cuando escribo "@María ¿puedes revisar esto?"
  Y publico el comentario
  Entonces María debe recibir una notificación
  Y el comentario debe mostrar la mención resaltada
  Y María debe ver la notificación en su bandeja

# ============================================================
# PROYECTOS
# ============================================================

Escenario: Crear un nuevo proyecto
  Dado que soy un Manager o Admin
  Cuando hago clic en "Nuevo Proyecto"
  Y proporciono el nombre "Campaña Black Friday 2025"
  Y proporciono una descripción
  Y asigno miembros del equipo
  Y hago clic en "Crear Proyecto"
  Entonces el proyecto debe ser creado
  Y los miembros asignados deben ver el proyecto en su lista
  Y debe crearse un dashboard específico del proyecto

Escenario: Archivar proyecto completado
  Dado que soy Admin de un proyecto completado
  Cuando selecciono "Archivar proyecto"
  Y confirmo la acción
  Entonces el proyecto debe moverse a "Proyectos Archivados"
  Y las tareas del proyecto deben mantenerse accesibles
  Y el proyecto no debe aparecer en las listas activas

# ============================================================
# NOTIFICACIONES
# ============================================================

Escenario: Recibir notificación de asignación de tarea
  Dado que soy un miembro del equipo
  Cuando un Manager me asigna una nueva tarea
  Entonces debo recibir una notificación in-app
  Y si tengo activadas las notificaciones por email
  Entonces debo recibir también un email
  Y la notificación debe contener el título de la tarea y el proyecto

Escenario: Recibir recordatorio de tarea próxima a vencer
  Dado que tengo una tarea con fecha límite en 2 días
  Cuando el sistema ejecuta el job de recordatorios
  Entonces debo recibir una notificación "Tu tarea vence en 2 días"
  Y la notificación debe incluir el título de la tarea
  Y debe permitirme abrir la tarea directamente

# ============================================================
# PERMISOS Y ROLES
# ============================================================

Escenario: Admin invita a un nuevo miembro
  Dado que soy Admin del workspace
  Cuando hago clic en "Invitar miembro"
  Y proporciono el email "nuevo@ejemplo.com"
  Y selecciono el rol "Member"
  Entonces debe enviarse un email de invitación
  Y el usuario debe poder aceptar la invitación
  Y debe crearse su cuenta con el rol asignado

Escenario: Member intenta crear un proyecto (sin permisos)
  Dado que soy un Member (no Manager ni Admin)
  Cuando intento acceder a "Nuevo Proyecto"
  Entonces debo ver el mensaje "No tienes permisos para crear proyectos"
  Y el botón debe estar deshabilitado

Escenario: Manager puede asignar tareas pero no eliminar usuarios
  Dado que soy un Manager
  Cuando intento asignar una tarea
  Entonces la acción debe completarse exitosamente
  Pero cuando intento eliminar un usuario del workspace
  Entonces debo ver "Solo los Admins pueden eliminar usuarios"

# ============================================================
# REPORTES Y MÉTRICAS
# ============================================================

Escenario: Generar reporte semanal
  Dado que soy Manager o Admin
  Cuando accedo a "Reportes"
  Y selecciono "Reporte Semanal"
  Y elijo la semana del 6 al 12 de noviembre
  Entonces debo ver:
    | Métrica                    | Valor |
    | Tareas completadas         | 23    |
    | Tareas creadas             | 18    |
    | Tareas pendientes          | 45    |
    | Tiempo promedio resolución | 2.3d  |
  Y debo poder exportar el reporte a PDF

Escenario: Ver métricas de productividad del equipo
  Dado que soy Manager
  Cuando accedo a "Analytics"
  Entonces debo ver un gráfico de tareas completadas por semana
  Y debo ver el ranking de miembros más productivos
  Y debo ver el tiempo promedio de resolución por prioridad

# ============================================================
# FIN DE HISTORIAS DE USUARIO
# ============================================================

