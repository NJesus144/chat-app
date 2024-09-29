'use client'

import { useState } from 'react'
import { register } from '../src/services/api'
import { Button } from "@/components/ui/button"
import { Input } from './ui/input'
import Link from 'next/link'

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
    <div className="max-w-md mx-auto text-white">
      <h2 className="text-2xl font-bold mb-5">Criar conta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Username</label>
          <Input type="text" placeholder="Username" value={username} onChange={setUsername} />
        </div>
        <div className="mb-4">
          <label className="block">Password</label>
          <Input type="text" placeholder="Password" value={password} onChange={setPassword} />
        </div>
        <Button className={'bg-neonPink w-full font-bold'}>Cadastrar</Button>
      </form>
      <div className='mt-4'>
        <Link href="/login">
        <span>Já possui conta? <span className='text-neonYellow hover:underline'>Faça login</span></span>
        </Link>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
