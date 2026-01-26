import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedNumberProps {
  value: number
  duration?: number
  withLocale?: boolean
}

/**
 * Componente para animar números con efecto de conteo
 * Se activa cuando el elemento entra en el viewport
 * @param {number} value - El valor final del número a mostrar
 * @param {number} duration - Duración de la animación en milisegundos
 * @param {boolean} withLocale - Si se debe formatear el número con locale+
 * @example
 * <AnimatedNumber value={1000} />
 * <AnimatedNumber value={500} duration={3000} withLocale={false} />
 */
export function AnimatedNumber({ 
  value, 
  duration = 2000,
  withLocale = true 
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const spring = useSpring(0, {
    bounce: 0,
    duration,
  })
  
  const display = useTransform(spring, (current) => {
    const rounded = Math.round(current)
    return withLocale ? rounded.toLocaleString() : rounded.toString()
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}
