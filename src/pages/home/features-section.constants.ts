type AnimationDirection = { x?: number; y?: number; opacity: number }

export const ANIMATIONS: Record<string, AnimationDirection[]> = {
  // 4 columnas
  desktop: [
    { x: -100, opacity: 0 }, // S - izquierda → derecha
    { y: 100, opacity: 0 },  // A - abajo → arriba
    { y: -100, opacity: 0 }, // I - arriba → abajo
    { x: 100, opacity: 0 },  // C - derecha → izquierda
  ],
  // 1 columna
  mobile: [
    { x: -10, opacity: 0 }, // S - izquierda → derecha
    { x: 10, opacity: 0 },  // A - derecha → izquierda
    { x: -10, opacity: 0 }, // I - izquierda → derecha
    { x: 10, opacity: 0 },  // C - derecha → izquierda
  ],
}
