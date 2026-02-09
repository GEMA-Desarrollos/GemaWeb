/**
 * Filtra solo dígitos numéricos de un string
 * Útil para campos como CUIT y teléfono
 * @param value - String a filtrar
 * @returns String con solo dígitos numéricos
 * @example
 * filterOnlyNumbers("11-2345-6789") // "1123456789"
 * filterOnlyNumbers("abc123def456") // "123456"
 */
export function filterOnlyNumbers(value: string): string {
  return value.replace(/[^0-9]/g, "")
}
