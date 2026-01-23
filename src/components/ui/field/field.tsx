import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  fieldSetVariants,
  fieldLegendVariants,
  fieldGroupVariants,
  fieldVariants,
  fieldContentVariants,
  fieldLabelVariants,
  fieldTitleVariants,
  fieldDescriptionVariants,
  fieldSeparatorVariants,
  fieldErrorVariants,
} from "./field.styles"
import type {
  FieldSetProps,
  FieldLegendProps,
  FieldGroupProps,
  FieldProps,
  FieldContentProps,
  FieldLabelProps,
  FieldTitleProps,
  FieldDescriptionProps,
  FieldSeparatorProps,
  FieldErrorProps,
} from "./field.types"

export function FieldSet({ className, ...props }: FieldSetProps) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(fieldSetVariants(), className)}
      {...props}
    />
  )
}

FieldSet.displayName = "FieldSet"

export function FieldLegend({
  className,
  variant = "legend",
  ...props
}: FieldLegendProps) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(fieldLegendVariants(), className)}
      {...props}
    />
  )
}

FieldLegend.displayName = "FieldLegend"

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <div
      data-slot="field-group"
      className={cn(fieldGroupVariants(), className)}
      {...props}
    />
  )
}

FieldGroup.displayName = "FieldGroup"

export function Field({
  className,
  orientation = "vertical",
  ...props
}: FieldProps) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

Field.displayName = "Field"

export function FieldContent({ className, ...props }: FieldContentProps) {
  return (
    <div
      data-slot="field-content"
      className={cn(fieldContentVariants(), className)}
      {...props}
    />
  )
}

FieldContent.displayName = "FieldContent"

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <Label
      data-slot="field-label"
      className={cn(fieldLabelVariants(), className)}
      {...props}
    />
  )
}

FieldLabel.displayName = "FieldLabel"

export function FieldTitle({ className, ...props }: FieldTitleProps) {
  return (
    <div
      data-slot="field-label"
      className={cn(fieldTitleVariants(), className)}
      {...props}
    />
  )
}

FieldTitle.displayName = "FieldTitle"

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <p
      data-slot="field-description"
      className={cn(fieldDescriptionVariants(), className)}
      {...props}
    />
  )
}

FieldDescription.displayName = "FieldDescription"

export function FieldSeparator({
  children,
  className,
  ...props
}: FieldSeparatorProps) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(fieldSeparatorVariants(), className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="text-muted-foreground px-2 bg-background relative mx-auto block w-fit"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

FieldSeparator.displayName = "FieldSeparator"

export function FieldError({
  className,
  children,
  errors,
  ...props
}: FieldErrorProps) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn(fieldErrorVariants(), className)}
      {...props}
    >
      {content}
    </div>
  )
}

FieldError.displayName = "FieldError"
