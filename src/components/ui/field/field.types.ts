import type { VariantProps } from "class-variance-authority"
import type { fieldVariants } from "./field.styles"
import type { Label } from "@/components/ui/label"

export type FieldOrientation = VariantProps<typeof fieldVariants>["orientation"]

export type FieldLegendVariant = "legend" | "label"

export type FieldSetProps = React.ComponentProps<"fieldset">

export interface FieldLegendProps extends React.ComponentProps<"legend"> {
  /**
   * Variante del legend
   * @default "legend"
   */
  variant?: FieldLegendVariant
}

export type FieldGroupProps = React.ComponentProps<"div">

export interface FieldProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof fieldVariants> {}

export type FieldContentProps = React.ComponentProps<"div">

export type FieldLabelProps = React.ComponentProps<typeof Label>

export type FieldTitleProps = React.ComponentProps<"div">

export type FieldDescriptionProps = React.ComponentProps<"p">

export interface FieldSeparatorProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode
}

export interface FieldErrorProps extends React.ComponentProps<"div"> {
  /**
   * Array de errores a mostrar
   */
  errors?: Array<{ message?: string } | undefined>
}
