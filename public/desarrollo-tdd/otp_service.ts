/**
 * OTP (One-Time Password) Service
 * 
 * Este módulo implementa la generación y validación de códigos OTP
 * siguiendo el enfoque TDD (Test-Driven Development).
 * 
 * Los tests se escribieron PRIMERO, definiendo el comportamiento esperado.
 * Este código fue implementado para hacer pasar todos esos tests.
 * 
 * Cumple con los estándares de agents.md:
 * - snake_case para funciones y variables
 * - PascalCase para tipos
 * - JSDoc completo
 * 
 * @module otp_service
 */

import crypto from 'crypto';

/**
 * Tipo que representa el resultado de generar un OTP con expiración
 */
export type OtpResult = {
  otp_code: string;
  expires_at: Date;
  created_at: Date;
};

/**
 * Genera un código OTP de 6 dígitos aleatorio
 * 
 * Utiliza crypto.randomInt() para asegurar aleatoriedad criptográfica.
 * El código siempre tiene 6 dígitos, incluyendo ceros a la izquierda si es necesario.
 * 
 * @returns {string} Código OTP de 6 dígitos (ej: "042819", "923401")
 * 
 * @example
 * const otp = generate_otp();
 * console.log(otp); // "394821"
 */
export function generate_otp(): string {
  // Genera un número aleatorio entre 0 y 999999
  const random_number = crypto.randomInt(0, 1000000);
  
  // Convierte a string y rellena con ceros a la izquierda para asegurar 6 dígitos
  const otp_code = random_number.toString().padStart(6, '0');
  
  return otp_code;
}

/**
 * Valida si un código OTP proporcionado coincide con el código esperado
 * 
 * La comparación es case-insensitive (aunque los OTP son numéricos).
 * También valida que ambos códigos tengan el formato correcto (6 dígitos).
 * 
 * @param {string} provided_otp - Código OTP proporcionado por el usuario
 * @param {string} expected_otp - Código OTP esperado (almacenado)
 * @returns {boolean} true si los códigos coinciden, false en caso contrario
 * 
 * @example
 * const stored_otp = "123456";
 * const user_input = "123456";
 * validate_otp(user_input, stored_otp); // true
 */
export function validate_otp(provided_otp: string, expected_otp: string): boolean {
  // Validar formato: ambos deben tener 6 dígitos
  if (!provided_otp || !expected_otp) {
    return false;
  }
  
  if (provided_otp.length !== 6 || expected_otp.length !== 6) {
    return false;
  }
  
  // Validar que solo contengan dígitos
  if (!/^\d{6}$/.test(provided_otp) || !/^\d{6}$/.test(expected_otp)) {
    return false;
  }
  
  // Comparación insensible a mayúsculas (aunque sean números)
  return provided_otp.toLowerCase() === expected_otp.toLowerCase();
}

/**
 * Genera un código OTP con tiempo de expiración
 * 
 * Crea un OTP y calcula su fecha de expiración basándose en los minutos proporcionados.
 * Útil para implementar OTPs que expiran después de un tiempo determinado.
 * 
 * @param {number} expiry_minutes - Minutos hasta que el OTP expire
 * @returns {OtpResult} Objeto con el código OTP, fecha de creación y fecha de expiración
 * 
 * @example
 * const result = generate_otp_with_expiry(5); // Expira en 5 minutos
 * console.log(result.otp_code); // "472819"
 * console.log(result.expires_at); // Date object
 */
export function generate_otp_with_expiry(expiry_minutes: number): OtpResult {
  const otp_code = generate_otp();
  const created_at = new Date();
  
  // Calcular fecha de expiración
  const expires_at = new Date(created_at.getTime() + (expiry_minutes * 60 * 1000));
  
  return {
    otp_code,
    expires_at,
    created_at,
  };
}

/**
 * Verifica si un OTP ha expirado
 * 
 * Compara la fecha de expiración con la fecha actual.
 * 
 * @param {Date} expiry_date - Fecha de expiración del OTP
 * @returns {boolean} true si el OTP ha expirado, false si aún es válido
 * 
 * @example
 * const past_date = new Date(Date.now() - 10000); // 10 segundos atrás
 * is_otp_expired(past_date); // true
 */
export function is_otp_expired(expiry_date: Date): boolean {
  const current_time = Date.now();
  const expiry_time = expiry_date.getTime();
  
  return current_time > expiry_time;
}

/**
 * Genera un hash SHA-256 del código OTP
 * 
 * En producción, los OTPs deberían almacenarse hasheados en la base de datos,
 * no en texto plano. Esta función permite crear ese hash de forma segura.
 * 
 * @param {string} otp_code - Código OTP a hashear
 * @returns {string} Hash SHA-256 del código en formato hexadecimal
 * 
 * @example
 * const otp = "123456";
 * const hashed = hash_otp(otp);
 * console.log(hashed); // "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
 */
export function hash_otp(otp_code: string): string {
  return crypto
    .createHash('sha256')
    .update(otp_code)
    .digest('hex');
}

/**
 * Valida un OTP proporcionado contra un hash almacenado
 * 
 * Útil cuando los OTPs se almacenan hasheados en la base de datos.
 * Hashea el OTP proporcionado y lo compara con el hash esperado.
 * 
 * @param {string} provided_otp - OTP proporcionado por el usuario
 * @param {string} stored_hash - Hash del OTP almacenado en la base de datos
 * @returns {boolean} true si el hash del OTP coincide, false en caso contrario
 * 
 * @example
 * const otp = "123456";
 * const stored_hash = hash_otp(otp);
 * validate_otp_hash("123456", stored_hash); // true
 * validate_otp_hash("654321", stored_hash); // false
 */
export function validate_otp_hash(provided_otp: string, stored_hash: string): boolean {
  if (!provided_otp || !stored_hash) {
    return false;
  }
  
  const provided_hash = hash_otp(provided_otp);
  return provided_hash === stored_hash;
}

