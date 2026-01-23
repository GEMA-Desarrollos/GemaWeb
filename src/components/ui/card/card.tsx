import { cn } from "@/lib/utils"
import {
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardActionVariants,
  cardContentVariants,
  cardFooterVariants,
} from "./card.styles"
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardActionProps,
  CardContentProps,
  CardFooterProps,
} from "./card.types"

export function Card({ className, size = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(cardVariants(), className)}
      {...props}
    />
  )
}

Card.displayName = "Card"

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants(), className)}
      {...props}
    />
  )
}

CardHeader.displayName = "CardHeader"

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariants(), className)}
      {...props}
    />
  )
}

CardTitle.displayName = "CardTitle"

export function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescriptionVariants(), className)}
      {...props}
    />
  )
}

CardDescription.displayName = "CardDescription"

export function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(cardActionVariants(), className)}
      {...props}
    />
  )
}

CardAction.displayName = "CardAction"

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants(), className)}
      {...props}
    />
  )
}

CardContent.displayName = "CardContent"

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooterVariants(), className)}
      {...props}
    />
  )
}

CardFooter.displayName = "CardFooter"
