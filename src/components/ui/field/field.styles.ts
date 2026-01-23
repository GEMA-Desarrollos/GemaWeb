import { cva } from "class-variance-authority"

export const fieldSetVariants = cva(
  "gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col"
)

export const fieldLegendVariants = cva(
  "mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base"
)

export const fieldGroupVariants = cva(
  "gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4 group/field-group @container/field-group flex w-full flex-col"
)

export const fieldVariants = cva(
  "data-[invalid=true]:text-destructive gap-3 group/field flex w-full",
  {
    variants: {
      orientation: {
        vertical:
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
        horizontal:
          "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

export const fieldContentVariants = cva(
  "gap-1 group/field-content flex flex-1 flex-col leading-snug"
)

export const fieldLabelVariants = cva(
  "has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col"
)

export const fieldTitleVariants = cva(
  "gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug"
)

export const fieldDescriptionVariants = cva(
  "text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
)

export const fieldSeparatorVariants = cva(
  "-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative"
)

export const fieldErrorVariants = cva(
  "text-destructive text-sm font-normal"
)
