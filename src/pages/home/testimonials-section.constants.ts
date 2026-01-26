type AnimationDirection = { x?: number; y?: number; opacity: number }

export const ANIMATIONS: Record<string, AnimationDirection[]> = {
  desktop: [
    { x: -100, opacity: 0 }, // izquierda → derecha
    { y: 100, opacity: 0 },  // abajo → arriba
    { y: -100, opacity: 0 }, // arriba → abajo
  ],
  mobile: [],
} as const
