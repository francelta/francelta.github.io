/**
 * Price Manager Module
 * 
 * Este módulo demuestra el desarrollo contextualizado y estandarizado.
 * Cumple con los estándares definidos en agents.md:
 * - snake_case para funciones y variables
 * - PascalCase para tipos e interfaces
 * - JSDoc completo para todas las funciones
 * 
 * @module price_manager
 */

/**
 * Tipo que define un producto con su información de precio
 */
export type ProductPrice = {
  product_id: string;
  base_price: number;
  currency: string;
  tax_rate: number;
};

/**
 * Tipo que define las opciones de descuento aplicables
 */
export type DiscountOptions = {
  discount_percentage?: number;
  discount_fixed?: number;
  is_member?: boolean;
  promo_code?: string;
};

/**
 * Tipo que representa el resultado del cálculo de precio final
 */
export type PriceCalculationResult = {
  base_price: number;
  discount_amount: number;
  tax_amount: number;
  final_price: number;
  currency: string;
  applied_discounts: string[];
};

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
 * const product = {
 *   product_id: 'PRD-001',
 *   base_price: 100,
 *   currency: 'USD',
 *   tax_rate: 0.21
 * };
 * 
 * const discount = {
 *   discount_percentage: 10,
 *   is_member: true
 * };
 * 
 * const result = calculate_final_price(product, discount);
 * // result.final_price = 106.92 (con descuento de miembro y 10%)
 */
export function calculate_final_price(
  product: ProductPrice,
  discount_options: DiscountOptions = {}
): PriceCalculationResult {
  const applied_discounts: string[] = [];
  let current_price = product.base_price;
  let total_discount = 0;

  // Aplicar descuento por porcentaje
  if (discount_options.discount_percentage) {
    const percentage_discount = current_price * (discount_options.discount_percentage / 100);
    total_discount += percentage_discount;
    current_price -= percentage_discount;
    applied_discounts.push(`${discount_options.discount_percentage}% descuento`);
  }

  // Aplicar descuento fijo
  if (discount_options.discount_fixed) {
    total_discount += discount_options.discount_fixed;
    current_price -= discount_options.discount_fixed;
    applied_discounts.push(`$${discount_options.discount_fixed} descuento fijo`);
  }

  // Aplicar descuento de membresía (5% adicional)
  if (discount_options.is_member) {
    const member_discount = current_price * 0.05;
    total_discount += member_discount;
    current_price -= member_discount;
    applied_discounts.push('5% descuento de miembro');
  }

  // Aplicar código promocional (10% adicional si es válido)
  if (discount_options.promo_code === 'SAVE10') {
    const promo_discount = current_price * 0.10;
    total_discount += promo_discount;
    current_price -= promo_discount;
    applied_discounts.push('Código promocional SAVE10');
  }

  // Calcular impuestos sobre el precio con descuento
  const tax_amount = current_price * product.tax_rate;
  const final_price = current_price + tax_amount;

  return {
    base_price: product.base_price,
    discount_amount: total_discount,
    tax_amount,
    final_price: Math.round(final_price * 100) / 100, // Redondear a 2 decimales
    currency: product.currency,
    applied_discounts,
  };
}

/**
 * Valida que un producto tenga información de precio válida
 * 
 * @param {ProductPrice} product - Producto a validar
 * @returns {boolean} true si el producto es válido, false en caso contrario
 * 
 * @example
 * const product = { product_id: 'PRD-001', base_price: 100, currency: 'USD', tax_rate: 0.21 };
 * validate_product_price(product); // true
 */
export function validate_product_price(product: ProductPrice): boolean {
  if (!product.product_id || product.product_id.trim() === '') {
    return false;
  }

  if (product.base_price <= 0) {
    return false;
  }

  if (product.tax_rate < 0 || product.tax_rate > 1) {
    return false;
  }

  const valid_currencies = ['USD', 'EUR', 'GBP', 'MXN'];
  if (!valid_currencies.includes(product.currency)) {
    return false;
  }

  return true;
}

/**
 * Formatea un precio con su símbolo de moneda
 * 
 * @param {number} price - Precio a formatear
 * @param {string} currency - Código de moneda (USD, EUR, etc.)
 * @returns {string} Precio formateado con símbolo de moneda
 * 
 * @example
 * format_price(99.99, 'USD'); // '$99.99'
 * format_price(49.50, 'EUR'); // '€49.50'
 */
export function format_price(price: number, currency: string): string {
  const currency_symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    MXN: '$',
  };

  const symbol = currency_symbols[currency] || currency;
  const formatted_price = price.toFixed(2);

  return `${symbol}${formatted_price}`;
}

/**
 * Compara dos precios y devuelve el porcentaje de ahorro
 * 
 * @param {number} original_price - Precio original
 * @param {number} discounted_price - Precio con descuento
 * @returns {number} Porcentaje de ahorro (0-100)
 * 
 * @example
 * calculate_savings_percentage(100, 80); // 20
 */
export function calculate_savings_percentage(
  original_price: number,
  discounted_price: number
): number {
  if (original_price <= 0) {
    return 0;
  }

  const savings = original_price - discounted_price;
  const percentage = (savings / original_price) * 100;

  return Math.max(0, Math.round(percentage * 100) / 100); // No permitir valores negativos
}

