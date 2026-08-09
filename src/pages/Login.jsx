import Navbar from "../components/organism/Navbar"
import LoginForm from "../components/organism/LoginForm";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />

      <main className="w-full px-5 py-7 lg:py-16">
        <LoginForm />
      </main>
    </div>
  )
}

export default Login;