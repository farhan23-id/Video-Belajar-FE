import { axiosInstance } from "../../../helpers/axiosInstance";

export async function getCourseData() {
  try {
    const { data: courses } = await axiosInstance.get("/courses");
    return courses;
  } catch (error) {
    console.error("Gagal menambil data course", error);
    throw error;
  }
}
