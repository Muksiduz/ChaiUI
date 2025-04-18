import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// 1. Define variants using cva
const buttonVariants = cva(
  "px-8 py-3 cursor-pointer text-white font-bold rounded-lg shadow-md transition transform duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-gray-600",
        destructive: "bg-red-800",
        primary: "bg-teal-600",
      },
      size: {
        default: "h-12",
        md: "h-24",
        lg: "h-53",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 3. Create a reusable button
export default function AllButtons({
  variant,
  size,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={twMerge(clsx(buttonVariants({ variant, size }), className))} />
  );
}
