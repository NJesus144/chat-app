'use client'

import { Button } from "./button"

export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className="h-12 w-full bg-mediumGray">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white">Logo</div>
        <div className="flex items-center">
          <div className="text-white mr-4">Home</div>
          <div className="text-white mr-4">About</div>
          <Button className="bg-cyan" onClick={logout}>Logout</Button>
        </div>
      </div>
    </div>
  )
}