import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";
import useTogglePassword from "../../../hooks/useTogglePassword";
import "../../../styles/App.css";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showPassword, togglePassword } = useTogglePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const navigate = useNavigate();

  const handleToRegister = () => {
    navigate("/register");
  };

  const handleToGoogleLogin = () => {
    navigate("/googleLogin");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto w-full min-w-0 max-w-147.5 px-5 py-7 lg:px-9 lg:py-9 bg-primaryBg rounded-sm border border-border flex flex-col gap-5 lg:gap-9`}
    >
      {/* Header */}
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <h2 className="heading-4 lg:heading-3">Masuk ke Akun</h2>
        <p className="bodySmall-R lg:bodyMedium-R text-textDark-secondary">
          Yuk, lanjutin belajarmu di videobelajar
        </p>
      </div>

      {/* Input */}
      <div className="w-full flex flex-col gap-5 lg:gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 lg:gap-6">
            <FormField
              id="email"
              label="E-mail"
              type="email"
              placeholder="nama123@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormField
              id="password"
              label="Kata Sandi"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              onTogglePassword={togglePassword}
              required
            />

            <NavLink
              to="/lupa-passsword"
              className="text-right bodySmall-M lg:bodyMedium-M text-textDark-secondary active:text-info-pressed"
            >
              Lupa Password?
            </NavLink>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              variant="primaryContained"
              className="bodySmall-B lg:bodyMedium-B"
            >
              Masuk
            </Button>
            <Button
              onClick={handleToRegister}
              variant="primaryShadow"
              className="bodySmall-B lg:bodyMedium-B"
            >
              Daftar
            </Button>
          </div>
        </div>

        <div className="separator flex justify-center items-center min-h-5 lg:min-h-5.5">
          <span className="font-sans font-normal text-[0.875rem] leading-[140%] tracking-[0.2px] text-textDark-secondary px-2 lg:text-[1rem]">
            atau
          </span>
        </div>

        <Button
          variant="blank"
          onClick={handleToGoogleLogin}
          className="bodySmall-B lg:bodyMedium-B"
        >
          <img src="asset/icon/google.png" alt="google.png" />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
