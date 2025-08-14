import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] text-white hover:from-[#1A6B54] hover:to-[#2D8A6F] shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-[#0F4C3A] bg-transparent text-[#0F4C3A] hover:bg-[#0F4C3A] hover:text-white shadow-md hover:shadow-lg",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        green: "bg-gradient-to-r from-[#0F4C3A] to-[#1A6B54] text-white hover:from-[#1A6B54] hover:to-[#2D8A6F] shadow-lg hover:shadow-xl",
        gold: "bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white hover:from-[#F4D03F] hover:to-[#E67E22] shadow-lg hover:shadow-xl",
        premium: "bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white hover:from-[#A855F7] hover:to-[#9333EA] shadow-lg hover:shadow-xl",
        glassmorphism: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
        xl: "h-16 rounded-2xl px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }