# 🎯 Proyecto 2: Desarrollo Contextualizado y Estandarizado

## 📋 Descripción

Este proyecto demuestra **control absoluto sobre la IA generativa**. No se trata de que la IA "haga lo que quiera", sino de que genere código que cumpla *exactamente* con los estándares del equipo.

El archivo `price_manager.ts` es un ejemplo perfecto de **desarrollo contextualizado**: código generado por IA que sigue al pie de la letra las convenciones definidas en nuestro manifiesto (`agents.md`).

---

## ✅ Estándares Aplicados (Verificación)

### 1. **Nomenclatura `snake_case` para Funciones y Variables**

**Estándar:** Todas las funciones y variables deben usar `snake_case`.

**Evidencia en el código:**
```typescript
// ✅ Funciones
export function calculate_final_price(...)
export function validate_product_price(...)
export function format_price(...)
export function calculate_savings_percentage(...)

// ✅ Variables
const applied_discounts: string[] = [];
let current_price = product.base_price;
let total_discount = 0;
const percentage_discount = ...
const member_discount = ...
```

**Resultado:** ✅ Cumplimiento 100%. Ninguna función o variable usa `camelCase`.

---

### 2. **Nomenclatura `PascalCase` para Tipos e Interfaces**

**Estándar:** Todos los tipos y clases deben usar `PascalCase`.

**Evidencia en el código:**
```typescript
// ✅ Tipos
export type ProductPrice = { ... }
export type DiscountOptions = { ... }
export type PriceCalculationResult = { ... }
```

**Resultado:** ✅ Cumplimiento 100%. Los tipos siguen la convención `PascalCase`.

---

### 3. **Documentación JSDoc Completa**

**Estándar:** Cada función debe tener un bloque JSDoc con descripción, parámetros, retorno y ejemplo.

**Evidencia en el código:**
```typescript
/**
 * Calcula el precio final de un producto aplicando descuentos e impuestos
 * 
 * Esta función demuestra:
 * - Nomenclatura snake_case para funciones
 * - Documentación JSDoc completa
 * - Manejo de tipos TypeScript con PascalCase
 * - Lógica de negocio clara y mantenible
 * 
 * @param {ProductPrice} product - Información del producto con precio base
 * @param {DiscountOptions} discount_options - Opciones de descuento a aplicar
 * @returns {PriceCalculationResult} Resultado del cálculo con desglose completo
 * 
 * @example
 * const product = { ... };
 * const result = calculate_final_price(product, discount);
 */
export function calculate_final_price(...) { ... }
```

**Resultado:** ✅ Las 4 funciones exportadas incluyen:
- Descripción clara
- Anotaciones `@param` con tipos
- Anotación `@returns`
- Bloque `@example` con caso de uso

---

### 4. **Tipos TypeScript Fuertes**

**Estándar:** Usar TypeScript para prevenir errores en tiempo de compilación.

**Evidencia en el código:**
```typescript
// ✅ Parámetros tipados
function calculate_final_price(
  product: ProductPrice,
  discount_options: DiscountOptions = {}
): PriceCalculationResult { ... }

// ✅ Variables tipadas
const applied_discounts: string[] = [];
const currency_symbols: Record<string, string> = { ... };
```

**Resultado:** ✅ Todos los parámetros, retornos y variables complejas están tipados.

---

## 🧠 ¿Por qué esto importa?

### Problema Común con IA Generativa
Cuando un desarrollador pide a una IA "crea un módulo de precios", la IA generalmente:
- Usa `camelCase` (convención JavaScript por defecto).
- Genera documentación mínima o inconsistente.
- Mezcla estilos de código.

### Solución: Desarrollo Contextualizado
En este proyecto:
1. La IA recibió **contexto explícito** (`agents.md`).
2. Se le instruyó a adherirse **estrictamente** a esos estándares.
3. El resultado es código que parece haber sido escrito por un humano senior siguiendo la guía de estilo del equipo.

---

## 🚀 Cómo Replicar Este Enfoque

### Paso 1: Define tus Estándares
Crea un archivo como `agents.md` con:
```markdown
## Estándares de Código
- Variables/Funciones: snake_case
- Tipos/Clases: PascalCase
- Documentación: JSDoc obligatorio
```

### Paso 2: Instruye a la IA
```
CRÍTICO: Lee @agents.md. El código que generes debe usar snake_case 
para funciones y PascalCase para tipos. Cada función debe tener JSDoc.
```

### Paso 3: Verifica
Revisa que el código generado cumpla punto por punto con tus estándares.

---

## 🔍 Caso de Uso Real

Este enfoque es clave cuando:
- Trabajas con **equipos grandes** que necesitan consistencia.
- Migras código entre proyectos con diferentes convenciones.
- Necesitas que la IA genere código para **proyectos legacy** con estilos específicos.

**Ejemplo:** Si tu empresa usa Python y JS, puedes instruir a la IA a usar `snake_case` en ambos para mantener consistencia cognitiva.

---

## 🛠️ Tecnologías Utilizadas

- **TypeScript:** Para tipado fuerte y prevención de errores.
- **JSDoc:** Para documentación inline que funciona con editores.
- **Convenciones Personalizadas:** `snake_case` + `PascalCase` según contexto.

---

## 📦 Despliegue

Este proyecto es un módulo TypeScript independiente. Puede ser:
- Importado en un proyecto Next.js/React.
- Usado en un backend Node.js.
- Publicado como paquete npm.

**Comando de ejemplo:**
```bash
npm install
npx tsc price_manager.ts
```

---

## 📝 Licencia

MIT - Proyecto de demostración para portafolio.

---

**🎓 Lección Clave:** La IA generativa es una herramienta poderosa, pero el *control* viene de darle el contexto correcto. Este proyecto prueba que puedes hacer que la IA genere código que cumpla con *tus* estándares, no los predeterminados de la IA.

