import axios from 'axios'

const API_URL = 'http://localhost:4000/auth'

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

export const getProfile = async (token: string) => {

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response)
    return response.data
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}