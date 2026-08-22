import { useState } from "react";
import Fieldset from "../../../components/ui/Fieldset";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import useTogglePassword from "../../../hooks/useTogglePassword";
import useAuthStore from "../../auth/stores/authStore";
import { useNavigate } from "react-router";
import { updateUser, deleteUser } from "../../auth/services/AuthService";

function EditProfileForm({ user }) {
  const navigate = useNavigate();
  const { login, logout } = useAuthStore();

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    gender: user.gender || "",
    countryCode: user.countryCode || "",
    phoneNumber: user.phoneNumber || "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { showPassword, togglePassword } = useTogglePassword();
  const {
    showPassword: showConfirmPassword,
    togglePassword: toggleConfirmPassword,
  } = useTogglePassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password && form.password !== form.confirmPassword) {
      alert("Konfirmasi password tidak cocok");
      return;
    }

    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userData } = form;

    const payload = {
      ...user,
      ...userData,
      password: form.password || user.password,
    };

    try {
      const updated = await updateUser(user.id, payload);

      login(updated);

      alert("Profile berhasil diperbarui");
    } catch (err) {
      alert(err.message || "Gagal memperbarui profile");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus akun? Tindakan ini tidak bisa dibatalkan",
    );
    if (!confirmDelete) return;

    try {
      await deleteUser(user.id);
      logout();
      navigate("/");
    } catch (err) {
      alert(err.message || "Gagal menghapus akun");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5">
      <Fieldset label="Nama Lengkap">
        <Input
          variant="profilePage"
          type="text"
          required={true}
          placeholder="Masukkan Nama Anda"
          value={form.name}
          onChange={handleChange}
        />
      </Fieldset>
      <Fieldset label="E-Mail">
        <Input
          variant="profilePage"
          type="email"
          required={true}
          placeholder="Masukkan E-mail"
          value={form.email}
          onChange={handleChange}
        />
      </Fieldset>
      <Fieldset label="Jenis Kelamin">
        <select
          name="gender"
          id="gender"
          value={form.gender}
          onChange={handleChange}
          className={`min-h-12.25 w-full mr-2 bg-transparent outline-none cursor-pointer bodyMedium-R ${
            form.gender === ""
              ? "text-textDark-secondary"
              : "text-textDark-primary"
          }`}
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
            value={form.countryCode}
            onChange={handleChange}
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
            name="phoneNumber"
            required={true}
            placeholder="Masukkan No. Hp"
            value={form.phoneNumber}
            onChange={handleChange}
            maxLength={12}
          />
        </Fieldset>
      </div>

      <Fieldset label="Password Baru">
        <Input
          variant="profilePage"
          type="password"
          name="password"
          onTogglePassword={togglePassword}
          showPassword={showPassword}
          placeholder="Masukkan Password"
          value={form.password}
          onChange={handleChange}
        />
      </Fieldset>

      <Fieldset label="Konfirmasi Password Baru">
        <Input
          variant="profilePage"
          type="password"
          name="confirmPassword"
          onTogglePassword={toggleConfirmPassword}
          showPassword={showConfirmPassword}
          placeholder="Masukkan Konfirmasi Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </Fieldset>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-end">
        <Button
          variant="blank"
          className="border-error-default bg-error-default text-textLight-primary"
          onClick={handleDelete}
        >
          Hapus
        </Button>

        <Button
          type="submit"
          variant="primaryContained"
          className="bodySmall-B lg:bodyMedium-B w-full lg:w-fit"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
}

export default EditProfileForm;
