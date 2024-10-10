import LoginForm from "@/components/LoginForm"
import { Navbar } from "../../../components/ui/navbar"


export default function Login() {
  return (
    <>
      <Navbar />
      <div className="bg-darkGray h-screen w-full pt-20">
        <LoginForm />
      </div>
    </>
  )
}
