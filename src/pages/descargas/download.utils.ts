/**
 * Inicia la descarga de un archivo desde una URL
 * @param url - URL del archivo a descargar
 * @param fileName - Nombre con el que se guardará el archivo
 */
export function downloadFile(url: string, fileName: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
