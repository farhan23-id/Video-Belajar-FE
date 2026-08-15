import { axiosInstance } from "../../../helpers/axiosInstance";

export async function loginUser({ email, password }) {
  const { data: users } = await axiosInstance.get("/users");

  const foundUser = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (!foundUser) {
    throw new Error("Email atau Password salah");
  }

  return foundUser;
}

export async function registerUser({
  name,
  email,
  password,
  countryCode = "+62",
}) {
  const { data: users } = await axiosInstance.get("users");
  const exists = users.some((u) => u.email === email);

  if (exists) {
    throw new Error("Email sudah terdaftar");
  }

  const { data: newUser } = await axiosInstance.post("/users", {
    name,
    email,
    password,
    gender: "",
    countryCode,
    phoneNumber: "",
    avatar: "",
  });

  return newUser;
}

export async function updateUser(id, updatedData) {
  const { data: updated } = await axiosInstance.put(
    `/users/${id}`,
    updatedData,
  );
  return updated;
}

export async function deleteUser(id) {
  const { data: deleted } = await axiosInstance.delete(`/users/${id}`);
  return deleted;
}
