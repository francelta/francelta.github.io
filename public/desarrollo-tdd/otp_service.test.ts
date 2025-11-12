/**
 * Test Suite for OTP Service
 * 
 * Este archivo de tests fue creado PRIMERO en el flujo TDD.
 * Los tests definen el comportamiento esperado antes de implementar la lógica.
 * 
 * @module otp_service.test
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  generate_otp,
  validate_otp,
  generate_otp_with_expiry,
  OtpResult,
  is_otp_expired,
  hash_otp,
} from './otp_service';

describe('OTP Service - Generación de Códigos', () => {
  /**
   * Test 1: El código OTP debe tener exactamente 6 dígitos
   */
  it('debe generar un código de 6 dígitos', () => {
    const otp = generate_otp();
    
    expect(otp).toBeDefined();
    expect(otp.length).toBe(6);
    expect(/^\d{6}$/.test(otp)).toBe(true); // Solo dígitos numéricos
  });

  /**
   * Test 2: Cada código generado debe ser único (no repetir)
   */
  it('no debe repetir códigos en 100 generaciones consecutivas', () => {
    const generated_codes = new Set<string>();
    const iterations = 100;

    for (let i = 0; i < iterations; i++) {
      const otp = generate_otp();
      generated_codes.add(otp);
    }

    // Si genera 100 códigos, deberían ser 100 únicos (o muy cercano)
    // Con 1,000,000 posibilidades (000000-999999), las colisiones son raras
    expect(generated_codes.size).toBeGreaterThan(95);
  });

  /**
   * Test 3: Los códigos deben estar entre 000000 y 999999
   */
  it('debe generar códigos dentro del rango válido', () => {
    for (let i = 0; i < 50; i++) {
      const otp = generate_otp();
      const otp_number = parseInt(otp, 10);
      
      expect(otp_number).toBeGreaterThanOrEqual(0);
      expect(otp_number).toBeLessThanOrEqual(999999);
    }
  });

  /**
   * Test 4: Debe incluir ceros a la izquierda si es necesario
   */
  it('debe incluir ceros a la izquierda para mantener 6 dígitos', () => {
    // Generar varios OTPs y verificar que siempre sean 6 dígitos
    for (let i = 0; i < 50; i++) {
      const otp = generate_otp();
      expect(otp.length).toBe(6);
    }
  });
});

describe('OTP Service - Validación', () => {
  let stored_otp: string;

  beforeEach(() => {
    stored_otp = generate_otp();
  });

  /**
   * Test 5: Debe validar correctamente un OTP válido
   */
  it('debe validar un OTP correcto', () => {
    const is_valid = validate_otp(stored_otp, stored_otp);
    expect(is_valid).toBe(true);
  });

  /**
   * Test 6: Debe rechazar un OTP incorrecto
   */
  it('debe rechazar un OTP incorrecto', () => {
    const wrong_otp = '000000';
    const is_valid = validate_otp(wrong_otp, stored_otp);
    
    if (stored_otp !== '000000') {
      expect(is_valid).toBe(false);
    }
  });

  /**
   * Test 7: La validación debe ser case-insensitive con strings
   */
  it('debe ser insensible a mayúsculas/minúsculas (si aplica)', () => {
    const is_valid = validate_otp(stored_otp.toLowerCase(), stored_otp.toUpperCase());
    expect(is_valid).toBe(true);
  });

  /**
   * Test 8: Debe rechazar códigos con formato inválido
   */
  it('debe rechazar códigos con longitud incorrecta', () => {
    const short_code = '123';
    const long_code = '1234567';
    
    expect(validate_otp(short_code, stored_otp)).toBe(false);
    expect(validate_otp(long_code, stored_otp)).toBe(false);
  });
});

describe('OTP Service - Expiración', () => {
  /**
   * Test 9: Debe generar OTP con timestamp de expiración
   */
  it('debe generar OTP con tiempo de expiración', () => {
    const result = generate_otp_with_expiry(5); // 5 minutos
    
    expect(result.otp_code).toBeDefined();
    expect(result.otp_code.length).toBe(6);
    expect(result.expires_at).toBeInstanceOf(Date);
    expect(result.expires_at.getTime()).toBeGreaterThan(Date.now());
  });

  /**
   * Test 10: Un OTP recién generado NO debe estar expirado
   */
  it('no debe considerar expirado un OTP recién generado', () => {
    const result = generate_otp_with_expiry(5);
    const is_expired = is_otp_expired(result.expires_at);
    
    expect(is_expired).toBe(false);
  });

  /**
   * Test 11: Un OTP con fecha pasada SÍ debe estar expirado
   */
  it('debe considerar expirado un OTP con fecha pasada', () => {
    const past_date = new Date(Date.now() - 10 * 60 * 1000); // 10 minutos atrás
    const is_expired = is_otp_expired(past_date);
    
    expect(is_expired).toBe(true);
  });

  /**
   * Test 12: Debe calcular correctamente el tiempo de expiración
   */
  it('debe configurar el tiempo de expiración correctamente', () => {
    const expiry_minutes = 10;
    const result = generate_otp_with_expiry(expiry_minutes);
    
    const expected_expiry = Date.now() + (expiry_minutes * 60 * 1000);
    const actual_expiry = result.expires_at.getTime();
    
    // Permitir 1 segundo de diferencia por el tiempo de ejecución
    expect(Math.abs(actual_expiry - expected_expiry)).toBeLessThan(1000);
  });
});

describe('OTP Service - Seguridad (Hashing)', () => {
  /**
   * Test 13: Debe generar hash consistente para el mismo OTP
   */
  it('debe generar el mismo hash para el mismo código', () => {
    const otp = '123456';
    const hash1 = hash_otp(otp);
    const hash2 = hash_otp(otp);
    
    expect(hash1).toBe(hash2);
  });

  /**
   * Test 14: Debe generar hashes diferentes para códigos diferentes
   */
  it('debe generar hashes diferentes para códigos diferentes', () => {
    const otp1 = '123456';
    const otp2 = '654321';
    
    const hash1 = hash_otp(otp1);
    const hash2 = hash_otp(otp2);
    
    expect(hash1).not.toBe(hash2);
  });

  /**
   * Test 15: El hash no debe ser igual al OTP original (debe estar encriptado)
   */
  it('el hash no debe ser el OTP en texto plano', () => {
    const otp = '123456';
    const hashed = hash_otp(otp);
    
    expect(hashed).not.toBe(otp);
    expect(hashed.length).toBeGreaterThan(otp.length);
  });
});

describe('OTP Service - Casos Edge', () => {
  /**
   * Test 16: Debe manejar tiempos de expiración de 0 minutos
   */
  it('debe manejar correctamente expiración inmediata', () => {
    const result = generate_otp_with_expiry(0);
    
    // Un OTP con 0 minutos debería estar ya expirado o expirar inmediatamente
    // Pequeño delay para asegurar que el tiempo pase
    setTimeout(() => {
      const is_expired = is_otp_expired(result.expires_at);
      expect(is_expired).toBe(true);
    }, 10);
  });

  /**
   * Test 17: Debe generar códigos válidos incluso con alta frecuencia
   */
  it('debe mantener unicidad bajo generación rápida', () => {
    const codes = new Set<string>();
    
    // Generar 1000 códigos lo más rápido posible
    for (let i = 0; i < 1000; i++) {
      codes.add(generate_otp());
    }
    
    // La mayoría deben ser únicos
    expect(codes.size).toBeGreaterThan(990);
  });
});

