import Link from "next/link"
import LoginForm from "../components/LoginForm"


export const LoginPage = () => {
  return (
    <div className="bg-green-300">
      <LoginForm />
      <Link href="/register">
        <button className="p-2 bg-red-300">Register</button></Link>
    </div>
  )
}