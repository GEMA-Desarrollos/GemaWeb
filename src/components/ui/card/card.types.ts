export type CardSize = "default" | "sm"

export interface CardProps extends React.ComponentProps<"div"> {
  /**
   * Tamaño del card
   * @default "default"
   */
  size?: CardSize
}

export type CardHeaderProps = React.ComponentProps<"div">

export type CardTitleProps = React.ComponentProps<"div">

export type CardDescriptionProps = React.ComponentProps<"div">

export type CardActionProps = React.ComponentProps<"div">

export type CardContentProps = React.ComponentProps<"div">

export type CardFooterProps = React.ComponentProps<"div">
