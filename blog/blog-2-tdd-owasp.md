# La IA como "Becario" Vulnerable: Mi Flujo TDD y OWASP en la Era de GenAI

**Autor:** Fran Carrasco  
**Fecha:** 3 de Octubre, 2024  
**Tiempo de lectura:** 12 minutos  
**Categoría:** Metodología

---

## El Problema: Vulnerability as a Service

Me encanta mi equipo de agentes de IA, pero no confío en ellos. Los trato como si fueran "becarios" (interns) increíblemente rápidos, brillantes y productivos, pero sin experiencia en el mundo real.

Son capaces de escribir 1000 líneas de código en 3 segundos, pero pueden introducir una vulnerabilidad OWASP Top 10 (como **Inyección SQL** o **Broken Access Control**) con la misma facilidad.

Por eso, mi flujo de trabajo empieza **antes** de que la IA escriba la primera línea de código: con **TDD (Test-Driven Development)**.

---

## El Peligro Real: Vulnerability as a Service

Las IAs generativas como ChatGPT, GitHub Copilot y Cursor tienen un problema fundamental: fueron entrenadas con código de GitHub. Y ese código incluye **millones de líneas con vulnerabilidades**.

### Ejemplos Reales que He Visto:

#### 1. Broken Access Control
```python
# ❌ Código generado por IA (VULNERABLE)
@app.route('/user/<user_id>/profile')
def get_profile(user_id):
    # Sin verificar si el usuario autenticado puede acceder a este perfil
    user = db.query(User).filter_by(id=user_id).first()
    return jsonify(user.to_dict())
```

**Problema:** Cualquier usuario puede ver el perfil de cualquier otro simplemente cambiando el `user_id` en la URL.

#### 2. SQL Injection
```python
# ❌ Código generado por IA (VULNERABLE)
@app.route('/search')
def search():
    query = request.args.get('q')
    # Interpolación directa = SQL Injection
    results = db.execute(f"SELECT * FROM products WHERE name LIKE '%{query}%'")
    return jsonify(results)
```

**Problema:** Un atacante puede inyectar `'; DROP TABLE products; --` y destruir la base de datos.

#### 3. Hardcoded Secrets
```javascript
// ❌ Código generado por IA (VULNERABLE)
const stripe = require('stripe')('sk_live_51ABC...XYZ'); // API key en el código
```

**Problema:** La clave secreta está en el código fuente y se subirá a GitHub.

---

## Mi Solución: El Flujo TDD Asistido por IA

Para mitigar estas vulnerabilidades, implemento un flujo de 4 pasos:

### Paso 1: Definir los Requisitos en GHERKIN

Antes de escribir código, defino los requisitos en formato GHERKIN (Given-When-Then):

```gherkin
Feature: Acceso a Perfiles de Usuario

Scenario: Un usuario intenta ver un perfil que no le pertenece
  Given estoy autenticado como usuario con ID 123
  When intento acceder al perfil del usuario con ID 456
  Then debería recibir un error 403 Forbidden
  And el perfil NO debería mostrarse

Scenario: Un usuario intenta ver su propio perfil
  Given estoy autenticado como usuario con ID 123
  When intento acceder al perfil del usuario con ID 123
  Then debería recibir un 200 OK
  And el perfil debería mostrarse completo
```

### Paso 2: La IA Genera los Tests (No el Código)

Le pido a mi agente de testing que genere los tests basados en GHERKIN:

```python
# ✅ Tests generados por agente_testing
def test_user_cannot_access_other_profiles(client, auth_token_user_123):
    """Test: Usuario no puede ver perfiles ajenos (Broken Access Control)"""
    response = client.get(
        '/user/456/profile',
        headers={'Authorization': f'Bearer {auth_token_user_123}'}
    )
    assert response.status_code == 403
    assert 'error' in response.json

def test_user_can_access_own_profile(client, auth_token_user_123):
    """Test: Usuario puede ver su propio perfil"""
    response = client.get(
        '/user/123/profile',
        headers={'Authorization': f'Bearer {auth_token_user_123}'}
    )
    assert response.status_code == 200
    assert 'email' in response.json
```

**Total de tests por feature:** Entre 20 y 40, cubriendo casos normales, edge cases y **escenarios de seguridad**.

### Paso 3: La IA Escribe el Código para Pasar los Tests

Ahora sí, le doy el contexto a la IA:

> "Implementa el endpoint `/user/<user_id>/profile` siguiendo estos requisitos:
> - Solo el propietario del perfil puede acceder
> - Usa prepared statements para evitar SQL injection
> - Lee las credenciales desde variables de entorno
> - Los tests ya están escritos en `tests/test_user_profile.py`"

```python
# ✅ Código generado por IA (SEGURO después de auditoría)
from flask import request, jsonify, abort
from functools import wraps
import os

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            abort(401, 'Token requerido')
        # Validar token...
        return f(*args, **kwargs)
    return decorated

@app.route('/user/<int:user_id>/profile')
@require_auth
def get_profile(user_id):
    current_user_id = get_current_user_id()  # Del token JWT
    
    # ✅ Verificación de acceso (previene Broken Access Control)
    if current_user_id != user_id:
        abort(403, 'No tienes permiso para acceder a este perfil')
    
    # ✅ Prepared statement (previene SQL Injection)
    user = db.query(User).filter_by(id=user_id).first()
    
    if not user:
        abort(404, 'Usuario no encontrado')
    
    return jsonify(user.to_dict())
```

### Paso 4: Auditaría Manual con Checklist OWASP

Finalmente, reviso el código con mi checklist de OWASP Top 10:

- [ ] **A01:2021 – Broken Access Control:** ✅ Verificado con `if current_user_id != user_id`
- [ ] **A02:2021 – Cryptographic Failures:** ✅ Uso de JWT, no contraseñas en texto plano
- [ ] **A03:2021 – Injection:** ✅ Prepared statements, no interpolación directa
- [ ] **A04:2021 – Insecure Design:** ✅ Tests de seguridad escritos primero
- [ ] **A05:2021 – Security Misconfiguration:** ✅ Secretos en `.env`, no hardcodeados
- [ ] **A06:2021 – Vulnerable Components:** ✅ `npm audit` sin vulnerabilidades críticas
- [ ] **A07:2021 – Authentication Failures:** ✅ Rate limiting implementado
- [ ] **A08:2021 – Data Integrity Failures:** ✅ Validación de inputs con schemas
- [ ] **A09:2021 – Logging Failures:** ✅ Logs de accesos y errores
- [ ] **A10:2021 – SSRF:** ✅ Validación de URLs externas

---

## Resultados: Confianza Cero, Seguridad Total

Desde que implementé este flujo:

- **0 vulnerabilidades críticas** detectadas en producción en los últimos 6 meses
- **40+ tests por feature**, ejecutados en cada commit
- **Cobertura de tests del 85%+**
- **Reducción del 60%** en tiempo de debugging (porque los tests atrapan errores antes)

---

## La Confianza Cero Es La Nueva Norma

La IA es tu "becario" más productivo, pero necesita supervisión constante. No confíes ciegamente en su código. Trátala como lo que es: una herramienta increíblemente poderosa que necesita **contexto**, **límites** y **auditoría**.

### Reglas de Oro:

1. **Tests primero, código después**
2. **La IA genera tests, tú auditas el código**
3. **OWASP Top 10 es tu checklist obligatoria**
4. **Secrets en `.env`, nunca hardcodeados**
5. **Prepared statements siempre, interpolación nunca**

---

## Herramientas que Uso

- **Cursor.ia:** Mi IDE principal para orquestar agentes
- **pytest / unittest:** Frameworks de testing
- **GitHub Actions:** CI/CD con tests automatizados
- **OWASP ZAP:** Scanner de vulnerabilidades
- **Bandit (Python):** Análisis estático de seguridad
- **npm audit / pip-audit:** Detección de dependencias vulnerables

---

**Siguiente artículo:** [Caso de Estudio: Cómo Orquesté un Equipo de Agentes para Construir este Mismo Portafolio](#)

**Conéctate conmigo:**
- GitHub: [github.com/francelta](https://github.com/francelta)
- LinkedIn: [Francisco José Carrasco Guerrero](https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/)
- Email: francelta@gmail.com

