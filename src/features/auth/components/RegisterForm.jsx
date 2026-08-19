import { useState } from "react";
import { useNavigate } from "react-router";
import useTogglePassword from "../../../hooks/useTogglePassword";

import FormField from "../../../components/ui/FormField";
import Label from "../../../components/ui/Label";
import PhoneField from "../../../components/ui/PhoneField";
import Button from "../../../components/ui/Button";
import "../../../styles/App.css";

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { showPassword, togglePassword } = useTogglePassword();
  const {
    showPassword: showConfirmPassword,
    togglePassword: toggleConfirmPassword,
  } = useTogglePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok");
      return;
    }
    onSubmit({ name, email, password, gender, countryCode, phoneNumber });
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
              htmlFor="fullName"
              label="Nama Lengkap"
              type="text"
              placeholder="Wowo Ubianto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <FormField
              id="email"
              htmlFor="email"
              label="E-mail"
              type="email"
              placeholder="nama123@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div>
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`w-full h-12 border border-border rounded-md py-1 px-3 bg-transparent appearance-none outline-none cursor-pointer bodyMedium-R ${gender === "" ? "text-textDark-secondary" : "text-textDark-primary"}`}
                style={{
                  backgroundImage: "url(/asset/icon/arrow_2.png)",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "24px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <option value="" disabled>
                  Masukan Jenis Kelamin
                </option>
                <option value="laki-laki" className="text-textDark-primary">
                  Laki-Laki
                </option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>

            <PhoneField
              countryCodeValue={countryCode}
              countryCodeOnChange={(e) => setCountryCode(e.target.value)}
              phoneNumberValue={phoneNumber}
              phoneNumberOnChange={(e) => setPhoneNumber(e.target.value)}
            />

            <FormField
              id="password"
              htmlFor="password"
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
              htmlFor="confirmPassword"
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
              type="submit"
              variant="primaryContained"
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
