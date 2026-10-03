import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-marigold text-ink hover:bg-[#f0b937]",
        dark: "bg-forest text-paper hover:bg-forest-2",
        outline:
          "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
        outlineLight:
          "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        default: "h-12 px-6 text-base rounded-md",
        sm: "h-10 px-4 text-sm rounded-md",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
