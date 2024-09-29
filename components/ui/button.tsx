import React from "react"


interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  typeButton?: "button" | "submit" | "reset" | undefined
  className?: string
}
export const Button = ({ children, onClick, typeButton = 'submit', className }: ButtonProps) => {
  return (
    <button
      type={typeButton}
      className={`font-cyber text-white px-4 py-2 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}