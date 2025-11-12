# Más Allá del "Vibe Coding": Por Qué Dejé de Escribir Código y Empecé a Dirigir Agentes

**"Vibe coding"**. Es el término que ha surgido para describir a un desarrollador que pide a una IA que "haga una app de tareas" y acepta ciegamente el resultado. Es rápido, es mágico y, superficialmente, parece productivo. Pero es una ilusión. Es el equivalente moderno a copiar y pegar código de Stack Overflow sin entenderlo. Este tipo de desarrollo está creando una nueva generación de **"código spaghetti"**: aplicaciones que son funcionales en la superficie, pero fundamentalmente frágiles, inseguras e imposibles de mantener.

El **45% del código ya lo escribe una IA**. Esta cifra no hará más que aumentar. Ante esta realidad, tenemos dos opciones: convertirnos en "operadores de prompts" glorificados, pidiendo código a ciegas, o evolucionar hacia un nuevo rol. Yo he elegido el segundo. Mi trabajo ya no es escribir código línea por línea; **mi trabajo es ser el Arquitecto y Piloto de un sistema que lo escribe**.

## El Piloto: Aportando Fundamentos

La IA es una herramienta increíblemente poderosa, pero carece de algo fundamental: el **contexto y los principios**. La IA no sabe por qué la empresa prefiere `snake_case` sobre `camelCase`. No entiende por qué una función de pago debe priorizar la seguridad sobre la velocidad. No comprende los matices de una arquitectura de microservicios específica.

Ahí es donde entra el **"Piloto"**. Mi trabajo es proporcionar ese contexto. Es definir el "manifiesto" (`agents.md`) que actúa como la constitución del proyecto. Este documento define:

* **Los Estándares**: Nomenclatura, formato de comentarios, JSDoc.
* **La Arquitectura**: El stack tecnológico (Next.js, Tailwind, Firebase).
* **Los Principios**: Seguridad por Diseño, Calidad (TDD).

La IA es el motor a reacción; yo soy el piloto que introduce las coordenadas y se asegura de que el avión no se estrelle contra una montaña.

## El Arquitecto: Orquestando un Equipo

Un proyecto real no lo hace un solo agente. Intentar que un único "super-agente" GPT-4 lo haga todo es ineficiente. El verdadero poder reside en la **orquestación**.

Mi flujo de trabajo imita al de un **Director de Orquesta**. En lugar de tocar todos los instrumentos, dirijo un equipo de "sub-agentes" (mis "mini-J.A.R.V.I.S.") especializados en tareas únicas:

* **El agente_pm (Project Manager)**: Le entrego notas de una reunión (`notas-reunion.md`) y él las transforma en historias de usuario GHERKIN listas para el desarrollo.
* **El agente_tester (Ingeniero de Calidad)**: Lee esas historias GHERKIN y escribe la suite de tests primero (TDD).
* **El agente_coder (Desarrollador)**: Su única misión es escribir el código que haga pasar esos tests, adhiriéndose a `agents.md`.
* **El agente_auditor (Seguridad)**: Revisa el código en busca de vulnerabilidades OWASP antes de cualquier commit.

## El Futuro del Desarrollo

El futuro del desarrollo de software no es un desarrollador que es 10 veces más rápido. Es un único **"Arquitecto y Piloto"** que dirige un sistema de 10 agentes que, colectivamente, son 100 veces más eficaces. 

Ese es el nuevo trabajo, y es el mío.

