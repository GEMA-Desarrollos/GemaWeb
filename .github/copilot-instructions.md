# Instrucciones de Desarrollo - GEMA Web

## Información del Proyecto

**Nombre:** gemaweb  
**Versión:** 0.0.0  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS 4  
**Package Manager:** pnpm

---

## Estructura del Proyecto

```
gemaweb/
├── .github/
│   └── copilot-instructions.md     # Este archivo
├── public/                          # Assets estáticos
├── src/
│   ├── assets/                      # Imágenes, iconos, fuentes
│   ├── components/
│   │   ├── ui/                      # Componentes UI reutilizables
│   │   │   ├── button/              # Ejemplo de estructura
│   │   │   │   ├── index.ts         # Barrel export
│   │   │   │   ├── button.tsx       # Componente React
│   │   │   │   ├── button.types.ts  # TypeScript interfaces
│   │   │   │   └── button.styles.ts # CVA variants
│   │   │   ├── card/
│   │   │   ├── badge/
│   │   │   ├── input/
│   │   │   ├── combobox/
│   │   │   └── ...
│   │   ├── layout/                  # Header, Footer, Nav
│   │   └── shared/                  # Componentes compartidos
│   ├── pages/                       # Páginas de la aplicación
│   │   ├── home/
│   │   │   └── index.tsx
│   │   ├── sucursales/
│   │   │   ├── index.tsx
│   │   │   └── components/          # Componentes específicos
│   │   ├── medios-pago/
│   │   ├── validador-os/
│   │   ├── teamviewer/
│   │   ├── paginas/
│   │   └── index.ts                 # Barrel de páginas
│   ├── lib/
│   │   └── utils.ts                 # cn() y utilidades
│   ├── App.tsx                      # Rutas principales
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Estilos globales
├── components.json                  # Config shadcn/ui
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Estructura de Componentes UI (Colocation Pattern)

**Cada componente UI debe seguir esta estructura:**

```
components/ui/[nombre-componente]/
├── index.ts                  # Export barrel público
├── [nombre].tsx             # Componente React (solo componente)
├── [nombre].types.ts        # Interfaces y types
└── [nombre].styles.ts       # CVA variants (NO componentes)
```

### Ejemplo: Button Component

#### `button/button.tsx`
```typescript
import * as React from "react"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button.styles"
import type { ButtonProps } from "./button.types"

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

Button.displayName = "Button"
```

#### `button/button.types.ts`
```typescript
import type { VariantProps } from "class-variance-authority"
import type { buttonVariants } from "./button.styles"

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]
export type ButtonSize = VariantProps<typeof buttonVariants>["size"]

export interface ButtonProps 
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

#### `button/button.styles.ts`
```typescript
import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

#### `button/index.ts`
```typescript
export { Button } from "./button"
export { buttonVariants } from "./button.styles"
export type { ButtonProps, ButtonVariant, ButtonSize } from "./button.types"
```

---

## Librerías Instaladas

### Dependencias de Producción

| Librería | Versión | Propósito |
|----------|---------|-----------|
| `react` | ^19.2.0 | Librería UI principal |
| `react-dom` | ^19.2.0 | Renderizado React en DOM |
| `typescript` | ~5.9.3 | Tipado estático |
| `tailwindcss` | ^4.1.17 | Framework CSS utility-first |
| `@tailwindcss/vite` | ^4.1.17 | Plugin Tailwind para Vite |
| `class-variance-authority` | ^0.7.1 | Gestión de variantes de componentes |
| `clsx` | ^2.1.1 | Utilidad para clases condicionales |
| `tailwind-merge` | ^3.4.0 | Merge inteligente de clases Tailwind |
| `radix-ui` | ^1.4.3 | Primitivos UI accesibles (headless) |
| `@base-ui/react` | ^1.1.0 | Componentes base sin estilo |
| `lucide-react` | ^0.562.0 | Librería de iconos SVG |
| `shadcn` | ^3.7.0 | Sistema de componentes UI |
| `@fontsource-variable/inter` | ^5.2.8 | Fuente Inter variable |
| `tw-animate-css` | ^1.4.0 | Animaciones para Tailwind |

### Dependencias de Desarrollo

| Librería | Versión | Propósito |
|----------|---------|-----------|
| `vite` | ^7.2.4 | Build tool y dev server |
| `@vitejs/plugin-react` | ^5.1.1 | Plugin React para Vite |
| `@types/react` | ^19.2.5 | Types de React |
| `@types/react-dom` | ^19.2.3 | Types de React DOM |
| `@types/node` | ^24.10.1 | Types de Node.js |
| `eslint` | ^9.39.1 | Linter JavaScript/TypeScript |
| `typescript-eslint` | ^8.46.4 | ESLint para TypeScript |
| `eslint-plugin-react-hooks` | ^7.0.1 | Reglas ESLint para hooks |
| `eslint-plugin-react-refresh` | ^0.4.24 | Reglas para Fast Refresh |

---

## Convenciones de Código

### Nomenclatura

```typescript
// ✅ Componentes: PascalCase + Named Export
export function Button({ ...props }: ButtonProps) { }
Button.displayName = "Button"

// ✅ Archivos: kebab-case
button.tsx, button.types.ts, button.styles.ts

// ✅ Carpetas: kebab-case
medios-pago/, validador-os/

// ✅ Interfaces: PascalCase con sufijo Props
interface ButtonProps extends React.ComponentProps<"button"> { }

// ✅ Types de variantes: PascalCase
type ButtonVariant = "default" | "outline"

// ❌ EVITAR: default exports, arrow functions en componentes
export default Button
const Button = () => { }
```

### Imports

```typescript
// ✅ Usar path alias @/
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ❌ NO usar imports relativos
import { Button } from "../../../components/ui/button"
```

### Separación de Archivos

**⚠️ IMPORTANTE para Fast Refresh:**

```typescript
// ❌ MAL - NO mezclar componentes con exports de utilidades
// button.tsx
export const buttonVariants = cva(...)  // ← Rompe Fast Refresh
export function Button() { }

// ✅ BIEN - Separar en archivos
// button.styles.ts
export const buttonVariants = cva(...)

// button.tsx  
export function Button() { }  // ← Solo componente
```

---

## Patrones de Código

### Class Variance Authority (CVA)

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base-classes", // Clases base
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "border border-input",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "sm",
        class: "border-2" // Caso especial
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
)

// Extraer tipos
type ButtonVariants = VariantProps<typeof buttonVariants>
```

### Utility cn() - Tailwind Merge

```typescript
import { cn } from "@/lib/utils"

// Merge correcto de clases Tailwind
<button className={cn(
  "base-class",
  variant === "primary" && "primary-class",
  isActive && "active-class",
  className // Props del usuario
)} />
```

### Radix Slot Pattern

```typescript
import { Slot } from "radix-ui"

// Permite pasar componentes personalizados
function Button({ asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  return <Comp {...props} />
}

// Uso
<Button asChild>
  <a href="/link">Link como botón</a>
</Button>
```

### Data Attributes

```typescript
// Usar data-* para estados y variantes
<button 
  data-slot="button"
  data-variant={variant}
  data-size={size}
  className="data-[variant=primary]:bg-blue-500"
/>
```

---

## Reglas de TypeScript

### Props de Componentes

```typescript
// ✅ Extender ComponentProps nativos
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

// ✅ Usar VariantProps de CVA
type ButtonVariants = VariantProps<typeof buttonVariants>

// ✅ Documentar con JSDoc
interface ButtonProps {
  /**
   * Variante visual del botón
   * @default "default"
   */
  variant?: ButtonVariant
}
```

---

## Estilos con Tailwind CSS 4

### Variables CSS

```css
/* index.css */
@import "tailwindcss";

@layer base {
  :root {
    --color-primary: 49 102 163;
    --color-background: 255 255 255;
    --radius-md: 0.5rem;
  }
}
```

### Clases Responsive

```typescript
<div className="
  grid 
  grid-cols-1           // Mobile first
  md:grid-cols-2        // Tablet
  lg:grid-cols-3        // Desktop
  gap-4
" />
```

---

## Checklist para Nuevos Componentes

Al crear un nuevo componente UI, verificar:

- [ ] Carpeta con estructura colocation
- [ ] Archivo `.tsx` solo con componente React
- [ ] Archivo `.types.ts` con interfaces
- [ ] Archivo `.styles.ts` con CVA variants
- [ ] Archivo `index.ts` con barrel exports
- [ ] `displayName` definido en componente
- [ ] Props documentadas con JSDoc
- [ ] Usar `cn()` para merge de clases
- [ ] Añadir `data-slot` attribute
- [ ] Implementar accesibilidad (aria-*)
- [ ] Soportar `asChild` si aplica
- [ ] Tipado completo con TypeScript

---

## Comandos

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Lint
pnpm lint
```

---

## Notas Importantes

1. **Fast Refresh:** NUNCA mezclar componentes con exports de utilidades en el mismo archivo
2. **Path Alias:** Siempre usar `@/` para imports
3. **Named Exports:** Usar named exports, NO default exports
4. **Colocation:** Mantener archivos relacionados juntos
5. **TypeScript:** Todo debe estar tipado correctamente
6. **Accesibilidad:** Usar semantic HTML y ARIA attributes
7. **Radix Slot:** Soportar `asChild` en componentes de layout

---

**Última actualización:** Enero 2026
