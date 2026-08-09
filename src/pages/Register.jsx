import Navbar from "../components/organism/Navbar"
import RegisterForm from "../components/organism/RegisterForm"

function Register() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />

      <main className="w-full px-5 py-7 lg:py-16">
        <RegisterForm />
      </main>
    </div>
  )
}

export default Register