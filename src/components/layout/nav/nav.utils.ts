/**
 * Detecta si una URL es un enlace externo
 * @param url - URL a verificar
 * @returns true si es enlace externo
 */
export function isExternalLink(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")
}
