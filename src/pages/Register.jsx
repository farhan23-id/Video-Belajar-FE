import Navbar from "../components/layout/Navbar";
import RegisterForm from "../features/auth/components/RegisterForm";

import { useNavigate } from "react-router";
import useAuthStore from "../features/auth/stores/authStore";
import { registerUser } from "../features/auth/services/AuthService";

function Register() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleRegister = async ({
    name,
    email,
    password,
    gender,
    countryCode,
    phoneNumber,
  }) => {
    try {
      const newUser = await registerUser({
        name,
        email,
        password,
        gender,
        countryCode,
        phoneNumber,
      });
      login(newUser);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />

      <main className="w-full px-5 py-7 lg:py-16">
        <RegisterForm onSubmit={handleRegister} />
      </main>
    </div>
  );
}

export default Register;
