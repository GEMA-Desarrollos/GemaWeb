/**
 * Parsea un valor estadístico separando prefijo, número y sufijo
 * @example parseStatValue("+50K") → { prefix: "+", number: 50, suffix: "K" }
 * @example parseStatValue("100%") → { prefix: "", number: 100, suffix: "%" }
 */
export function parseStatValue(value: string) {
  const match = value.match(/(\d+)/)
  
  if (!match) {
    return { prefix: "", number: 0, suffix: value }
  }

  const prefixMatch = value.match(/^([^\d]+)/)
  const suffixMatch = value.match(/(\D+)$/)

  return {
    prefix: prefixMatch ? prefixMatch[1] : "",
    number: parseInt(match[1]),
    suffix: suffixMatch ? suffixMatch[1] : "",
  }
}
