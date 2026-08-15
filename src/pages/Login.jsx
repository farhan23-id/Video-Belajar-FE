import Navbar from "../components/layout/Navbar";
import LoginForm from "../features/auth/components/LoginForm";

import { useNavigate } from "react-router";
import useAuthStore from "../features/auth/stores/authStore";
import { loginUser } from "../features/auth/services/AuthService";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async ({ email, password }) => {
    try {
      const user = await loginUser({ email, password });
      login(user);
      navigate("/");
    } catch (err) {
      alert(err.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />

      <main className="w-full px-5 py-7 lg:py-16">
        <LoginForm onSubmit={handleLogin} />
      </main>
    </div>
  );
}

export default Login;
