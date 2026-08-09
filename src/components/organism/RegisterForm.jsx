import { useState } from "react";
import { useNavigate } from "react-router";
import useTogglePassword from "../../hooks/useTogglePassword";

import FormField from "../molecules/FormField";
import PhoneField from "../molecules/PhoneField";
import Button from "../atoms/Button";
import "../../styles/organism.css";

function RegisterForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const { showPassword, togglePassword } = useTogglePassword();
  const {
    showPassword: showConfirmPassword,
    togglePassword: toggleConfirmPassword,
  } = useTogglePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/login");
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
        <h2 className="heading-4 lg:heading-3">Pendaftaran Akun</h2>
        <p className="bodySmall-R lg:bodyMedium-R text-textDark-secondary">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </div>

      {/* Input */}
      <div className="w-full flex flex-col gap-5 lg:gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 lg:gap-6">
            <FormField
              id="fullName"
              label="Nama Lengkap"
              type="text"
              placeholder="Wowo Ubianto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <FormField
              id="email"
              label="E-mail"
              type="email"
              placeholder="nama123@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <PhoneField />

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

            <FormField
              id="confirmPassword"
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onTogglePassword={toggleConfirmPassword}
              required
            />
          </div>

          <div className="flex flex-col gap-4 lg:pt-5">
            <Button
              variant="primadryContaine"
              className="bodySmall-B lg:bodyMedium-B"
            >
              Daftar
            </Button>
            <Button
              onClick={handleToLogin}
              variant="primaryShadow"
              className="bodySmall-B lg:bodyMedium-B"
            >
              Masuk
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
          {" "}
          <img src="asset/icon/google.png" alt="google.png" />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
