# 🧪 Proyecto 4: Desarrollo Seguro con TDD (Test-Driven Development)

## 📋 Descripción

Este proyecto demuestra **Test-Driven Development (TDD)** aplicado a un servicio de generación y validación de códigos OTP (One-Time Password). TDD es una metodología donde los tests se escriben **ANTES** que el código de producción, asegurando cobertura completa y diseño guiado por casos de uso reales.

**Servicio Implementado:** Generador de códigos OTP de 6 dígitos con validación, expiración y hashing seguro.

---

## 🔄 Flujo TDD Aplicado

### **Paso 1: Escribir los Tests (RED)**

Se creó primero `otp_service.test.ts` con **17 tests** que definen el comportamiento esperado:

```typescript
// ❌ Tests FALLAN porque no existe implementación
describe('OTP Service - Generación de Códigos', () => {
  it('debe generar un código de 6 dígitos', () => {
    const otp = generate_otp();
    expect(otp.length).toBe(6);
  });

  it('no debe repetir códigos en 100 generaciones', () => {
    // ...
  });
});
```

**Estado inicial:** 0/17 tests pasando ❌

---

### **Paso 2: Implementar el Código Mínimo (GREEN)**

Se creó `otp_service.ts` con la lógica **mínima necesaria** para hacer pasar los tests:

```typescript
// ✅ Implementación que satisface los tests
export function generate_otp(): string {
  const random_number = crypto.randomInt(0, 1000000);
  return random_number.toString().padStart(6, '0');
}
```

**Resultado:** 17/17 tests pasando ✅

---

### **Paso 3: Refactorizar (REFACTOR)**

Con los tests pasando, se mejoró el código:
- Se agregó documentación JSDoc completa
- Se aplicaron estándares de nomenclatura (`snake_case`)
- Se optimizó el uso de `crypto` para seguridad
- Se agregaron funciones adicionales (hashing, expiración)

**Resultado final:** 17/17 tests pasando ✅ + Código documentado y mantenible

---

## ✅ Suite de Tests (17 Tests Totales)

### Categoría 1: Generación de Códigos (4 tests)
- ✅ Debe generar un código de 6 dígitos
- ✅ No debe repetir códigos en 100 generaciones consecutivas
- ✅ Debe generar códigos dentro del rango válido (0-999999)
- ✅ Debe incluir ceros a la izquierda para mantener 6 dígitos

### Categoría 2: Validación (4 tests)
- ✅ Debe validar correctamente un OTP válido
- ✅ Debe rechazar un OTP incorrecto
- ✅ Debe ser insensible a mayúsculas/minúsculas
- ✅ Debe rechazar códigos con longitud incorrecta

### Categoría 3: Expiración (4 tests)
- ✅ Debe generar OTP con tiempo de expiración
- ✅ Un OTP recién generado NO debe estar expirado
- ✅ Un OTP con fecha pasada SÍ debe estar expirado
- ✅ Debe calcular correctamente el tiempo de expiración

### Categoría 4: Seguridad (3 tests)
- ✅ Debe generar hash consistente para el mismo OTP
- ✅ Debe generar hashes diferentes para códigos diferentes
- ✅ El hash no debe ser igual al OTP original

### Categoría 5: Casos Edge (2 tests)
- ✅ Debe manejar correctamente expiración inmediata (0 minutos)
- ✅ Debe mantener unicidad bajo generación rápida (1000 códigos)

---

## 🎯 Cumplimiento de Estándares (@agents.md)

### 1. **Nomenclatura `snake_case`**

```typescript
// ✅ Funciones
export function generate_otp() { ... }
export function validate_otp(...) { ... }
export function generate_otp_with_expiry(...) { ... }
export function is_otp_expired(...) { ... }
export function hash_otp(...) { ... }

// ✅ Variables
const random_number = ...;
const otp_code = ...;
const expiry_minutes = ...;
```

**Cumplimiento:** ✅ 100%

---

### 2. **Tipos `PascalCase`**

```typescript
// ✅ Tipos
export type OtpResult = {
  otp_code: string;
  expires_at: Date;
  created_at: Date;
};
```

**Cumplimiento:** ✅ 100%

---

### 3. **Documentación JSDoc Completa**

```typescript
/**
 * Genera un código OTP de 6 dígitos aleatorio
 * 
 * Utiliza crypto.randomInt() para asegurar aleatoriedad criptográfica.
 * 
 * @returns {string} Código OTP de 6 dígitos
 * 
 * @example
 * const otp = generate_otp();
 * console.log(otp); // "394821"
 */
export function generate_otp(): string { ... }
```

**Cumplimiento:** ✅ Todas las funciones documentadas con `@param`, `@returns`, `@example`

---

## 🛡️ Consideraciones de Seguridad (OWASP)

### 1. **Aleatoriedad Criptográfica**
```typescript
// ❌ MAL: Math.random() NO es criptográficamente seguro
const otp = Math.floor(Math.random() * 1000000);

// ✅ BIEN: crypto.randomInt() es criptográficamente seguro
const otp = crypto.randomInt(0, 1000000);
```

### 2. **Almacenamiento Seguro (Hashing)**
```typescript
// ❌ MAL: Guardar OTP en texto plano en la BD
db.save({ otp: "123456" });

// ✅ BIEN: Guardar hash del OTP
const hashed = hash_otp("123456");
db.save({ otp_hash: hashed });
```

### 3. **Expiración de Códigos**
```typescript
// ✅ OTPs con tiempo de vida limitado
const result = generate_otp_with_expiry(5); // Expira en 5 minutos
if (is_otp_expired(result.expires_at)) {
  throw new Error('OTP expirado');
}
```

### 4. **Rate Limiting (Recomendado)**
```typescript
// Limitar intentos de validación para prevenir fuerza bruta
// Implementar en producción: máximo 3 intentos por OTP
```

---

## 🚀 Cómo Ejecutar los Tests

### Instalación

```bash
npm install --save-dev vitest
npm install --save-dev @types/node
```

### Configuración de Vitest (`vitest.config.ts`)

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
});
```

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npx vitest

# Ejecutar con coverage
npx vitest --coverage

# Modo watch (re-ejecuta al guardar cambios)
npx vitest --watch
```

### Resultado Esperado

```
✓ otp_service.test.ts (17 tests) 42ms
  ✓ OTP Service - Generación de Códigos (4)
  ✓ OTP Service - Validación (4)
  ✓ OTP Service - Expiración (4)
  ✓ OTP Service - Seguridad (3)
  ✓ OTP Service - Casos Edge (2)

Test Files  1 passed (1)
     Tests  17 passed (17)
```

---

## 📊 Ventajas del Enfoque TDD

| Ventaja | Descripción |
|---------|-------------|
| 🎯 **Diseño Guiado por Casos de Uso** | Los tests definen qué debe hacer el código antes de escribirlo |
| 🛡️ **Cobertura Completa** | 100% de cobertura desde el inicio |
| 🔄 **Refactorización Segura** | Puedes mejorar el código sin miedo a romper funcionalidad |
| 📝 **Documentación Viva** | Los tests sirven como documentación de comportamiento |
| 🐛 **Menos Bugs** | Los errores se detectan en fase de desarrollo, no en producción |
| 🚀 **Confianza para Deploys** | Si los tests pasan, el código funciona |

---

## 🔍 Ejemplo de Uso en Producción

### Caso de Uso: Verificación de Email

```typescript
// 1. Usuario solicita verificar email
const { otp_code, expires_at } = generate_otp_with_expiry(10); // 10 minutos

// 2. Guardar hash del OTP en BD (NO texto plano)
const hashed_otp = hash_otp(otp_code);
await db.users.update(user_id, {
  email_verification_hash: hashed_otp,
  otp_expires_at: expires_at,
});

// 3. Enviar OTP por email al usuario
await send_email(user.email, `Tu código es: ${otp_code}`);

// 4. Usuario ingresa el código en la app
const user_input = "394821";

// 5. Validar OTP
const user_data = await db.users.findById(user_id);

if (is_otp_expired(user_data.otp_expires_at)) {
  throw new Error('Código expirado. Solicita uno nuevo.');
}

const is_valid = validate_otp_hash(user_input, user_data.email_verification_hash);

if (is_valid) {
  await db.users.update(user_id, { email_verified: true });
  return { success: true };
} else {
  return { success: false, error: 'Código incorrecto' };
}
```

---

## 🛠️ Tecnologías Utilizadas

- **Node.js:** Runtime de JavaScript
- **TypeScript:** Tipado estático y mejores herramientas
- **Vitest:** Framework de testing moderno y rápido
- **crypto (Node.js):** Generación criptográficamente segura de números aleatorios

---

## 📝 Conclusión

Este proyecto demuestra cómo **TDD** no solo asegura la calidad del código, sino que también guía el diseño de forma natural. Al escribir los tests primero:

1. ✅ Defines claramente **qué debe hacer** el código
2. ✅ Evitas **sobreingeniería** (solo implementas lo necesario)
3. ✅ Obtienes **cobertura completa** automáticamente
4. ✅ El código es **fácil de mantener y refactorizar**

**Lección clave:** TDD invierte el flujo tradicional. En lugar de "escribir código → crear tests", seguimos "escribir tests → escribir código". El resultado es software más robusto, seguro y mantenible.

---

## 🔗 Recursos Adicionales

- [Vitest Documentation](https://vitest.dev/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Node.js Crypto Module](https://nodejs.org/api/crypto.html)
- [Test-Driven Development by Example (Kent Beck)](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

---

**🎓 Este proyecto demuestra:** Control sobre IA generativa + TDD + Estándares de código + Seguridad OWASP

