import axios from 'axios'

const API_URL = 'http://localhost:3001/auth'

interface UserData {
  username: string
  password: string
}

export const register = async ({ username, password }: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}

export const login = async ({ username, password }: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    })
    return response.data
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}
