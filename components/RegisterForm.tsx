'use client'

import { useState } from 'react'
import { register } from '../src/services/api'

export default function RegisterForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await register({ username, password })
      setMessage('User registered successfully')
    } catch (error) {
      setMessage('An unexpected error occurred')
    }
  }

  return (
    <div className="max-w-md mx-auto text-black">
      <h2 className="text-2xl font-bold mb-5 text-white">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
