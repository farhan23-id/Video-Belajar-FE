import { useState } from "react";
import Fieldset from "../../../components/ui/Fieldset";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import useTogglePassword from "../../../hooks/useTogglePassword";

function EditProfileForm() {
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

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Fieldset label="Nama Lengkap">
        <Input
          variant="profilePage"
          type="text"
          required={true}
          placeholder="Masukkan Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Fieldset>
      <Fieldset label="Email">
        <Input
          variant="profilePage"
          type="e-mail"
          required={true}
          placeholder="Masukkan E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Fieldset>
      <Fieldset label="Jenis Kelamin">
        <select
          name="sex"
          id="sex"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className={`min-h-12.25 w-full mr-2 bg-transparent outline-none cursor-pointer bodyMedium-R ${gender === "" ? "text-textDark-secondary" : "text-textDark-primary"}`}
        >
          <option value="" disabled>
            Masuukan Jenis Kelamin
          </option>
          <option value="laki-laki" className="text-textDark-primary">
            Laki-Laki
          </option>
          <option value="perempuan">Perempuan</option>
        </select>
      </Fieldset>

      <div className="flex items-center w-full gap-3 lg:gap-4">
        <div className="country-wrapper bg-primaryBg relative border border-border rounded-md flex items-center min-w-30.5 h-12.25 box-border">
          <div className="country relative h-full min-w-11 bg-baseBg border-r border-border flex items-center justify-center px-2.5">
            <span className="flag-icon"></span>
          </div>

          <select
            className="grow h-full pl-2.5 mr-2 bg-transparent outline-none cursor-pointer"
            name="countryCode"
            id="countryCode"
            aria-label="Kode Negara"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
          >
            <option value="+62">+62</option>
            <option value="+60">+60</option>
            <option value="+61">+61</option>
          </select>
        </div>

        <Fieldset label="No.Hp" className="grow">
          <Input
            variant="profilePage"
            type="tel"
            required={true}
            placeholder="Masukkan No. Hp"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Fieldset>
      </div>

      <Fieldset label="Password">
        <Input
          variant="profilePage"
          type="password"
          required={true}
          onTogglePassword={togglePassword}
          showPassword={showPassword}
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Fieldset>

      <Fieldset label="Konfirmasi Password">
        <Input
          variant="profilePage"
          type="password"
          required={true}
          onTogglePassword={toggleConfirmPassword}
          showPassword={showConfirmPassword}
          placeholder="Masukkan Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Fieldset>

      <div className="flex lg:justify-end">
        <Button
          variant="primadryContaine"
          className="bodySmall-B lg:bodyMedium-B w-full lg:w-fit"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default EditProfileForm;
