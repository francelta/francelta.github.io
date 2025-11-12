# La IA como "Becario" Vulnerable: Mi Flujo TDD y OWASP en la Era de GenAI

Me encanta mi equipo de agentes de IA, pero **no confío en ellos**. En absoluto.

Mi metáfora de trabajo es simple: trato a cada agente de GenAI como si fuera un **"becario" (intern)** increíblemente rápido, brillante y productivo, pero completamente ingenuo y sin experiencia en el mundo real. Es un becario capaz de escribir una API REST completa en 30 segundos, pero que felizmente introducirá una **vulnerabilidad de Inyección SQL** porque no entiende el *por qué* de la sanitización de entradas.

Estamos en la era de la **"Vulnerability as a Service"** (Vulnerabilidad como Servicio). La misma IA que acelera nuestro desarrollo puede generar código plagado de fallos del OWASP Top 10 (Inyección, Broken Access Control, Exposición de Datos Sensibles) si no se la dirige con una autoridad absoluta.

La productividad es inútil si introduce un riesgo existencial. Por eso, mi flujo de trabajo se basa en un principio de **"confianza cero"** y se blinda con una metodología clásica: **TDD (Test-Driven Development)**.

## TDD es el Arnés de la IA

El Desarrollo Guiado por Tests es, irónicamente, más relevante que nunca. En el pasado, usábamos TDD para forzarnos a nosotros mismos a escribir código limpio. Hoy, yo lo uso como un **"arnés"** para forzar a la IA a escribir código correcto y seguro.

La IA tiende a alucinar o a tomar atajos. TDD elimina esa posibilidad. El ciclo de **"Rojo-Verde-Refactor"** se convierte en un diálogo de control:

### 1. Rojo (El Test Falla)

Yo (el Piloto) defino los requisitos en formato **GHERKIN**. Mi `agente_tester` lee esos requisitos y genera una suite de tests completa (ej. `otp_service.test.ts`). Al principio, todos estos tests fallan porque la lógica no existe.

### 2. Verde (El Test Pasa)

Mi `agente_coder` recibe los tests fallidos. Su única misión es escribir el código (`otp_service.ts`) mínimo y necesario para que esa suite de tests pase a verde. No puede inventarse funciones. No puede añadir features innecesarias. Su universo está acotado por los tests.

### 3. Refactor (La Auditoría Humana)

El código resultante es limpio, está probado y es específico. Ahora, y solo ahora, entro yo. Mi trabajo de auditoría se reduce de revisar 1000 líneas de código alucinado a revisar 50 líneas de código que ya sé que funcionan.

## Seguridad por Diseño (Security by Design)

Mi `agente_tester` no solo prueba la lógica de negocio. Gracias al contexto de mi `agents.md`, también genera **tests de seguridad**:

* ¿La función de login prueba un intento de **inyección SQL**? (`' OR '1'='1'`)
* ¿La API de usuario comprueba los permisos (**Broken Access Control**)?
* ¿La función de OTP limita los intentos (**Ataques de Fuerza Bruta**)?

Al forzar a la IA a pasar estos tests de seguridad antes de que el código se considere "completo", la **Seguridad por Diseño** deja de ser una ocurrencia tardía y se convierte en un prerrequisito innegociable.

## Conclusión

La IA es una herramienta de productividad asombrosa, pero solo si el "Piloto" humano está obsesionado con la seguridad. **TDD** no es una reliquia del pasado; es el arnés que transforma a un "becario" vulnerable en un colaborador seguro y confiable.

