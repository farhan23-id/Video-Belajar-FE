import { axiosUsers } from "../../../helpers/axiosUsers";

export async function loginUser({ email, password }) {
  const { data: users } = await axiosUsers.get("/users");

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
  gender,
  countryCode,
  phoneNumber,
}) {
  const { data: users } = await axiosUsers.get("/users");
  const exists = users.some((u) => u.email === email);

  if (exists) {
    throw new Error("Email sudah terdaftar");
  }

  const { data: newUser } = await axiosUsers.post("/users", {
    name,
    email,
    password,
    gender: gender || "",
    countryCode: countryCode || "",
    phoneNumber: phoneNumber || "",
    avatar: "",
  });

  return newUser;
}

export async function updateUser(id, updatedData) {
  const { data: updated } = await axiosUsers.put(`/users/${id}`, updatedData);
  return updated;
}

export async function deleteUser(id) {
  const { data: deleted } = await axiosUsers.delete(`/users/${id}`);
  return deleted;
}
