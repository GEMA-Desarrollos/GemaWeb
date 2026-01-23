import { cva } from "class-variance-authority"

export const cardVariants = cva(
  "ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col"
)

export const cardHeaderVariants = cva(
  "gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
)

export const cardTitleVariants = cva(
  "text-base leading-normal font-medium group-data-[size=sm]/card:text-sm"
)

export const cardDescriptionVariants = cva(
  "text-muted-foreground text-sm"
)

export const cardActionVariants = cva(
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end"
)

export const cardContentVariants = cva(
  "px-6 group-data-[size=sm]/card:px-4"
)

export const cardFooterVariants = cva(
  "rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center"
)
