"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className, ...props }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-[#2a2a2a] hover-lift animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function AnimatedCardGrid({ children, className, ...props }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "grid gap-6 stagger-children",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 