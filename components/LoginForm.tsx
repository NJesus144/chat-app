'use client'

import { useState } from 'react'
import { login } from '../src/services/api'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await login({ username, password })
      localStorage.setItem('token', data.access_token)
      setMessage('User logged in successfully')
      if (data) {
        router.push("/profile")
      }
    } catch (error) {
      setMessage('An unexpected error occurred')
    }
  }

  return (
    <div className="max-w-md mx-auto text-white">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Username</label>
          <Input type="text" placeholder="Username" value={username} onChange={setUsername} />
        </div>
        <div className="mb-4">
          <label className="block">Password</label>
          <Input type="text" placeholder="Password" value={password} onChange={setPassword} />
        </div>
        <Button className={'bg-neonPink w-full font-bold'}>Login</Button>
      </form>
      <div className='mt-4'>
        <Link href="/register">
        <span>Nao possui uma conta? <span className='text-neonYellow hover:underline'>Crie uma</span></span>
        </Link>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
