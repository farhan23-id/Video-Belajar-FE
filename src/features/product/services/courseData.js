import { axiosInstance } from "../../../helpers/axiosInstance";

export async function getCourseData() {
  try {
    const { data: courses } = await axiosInstance.get("/courses");
    return courses;
  } catch (error) {
    console.error("Gagal menambil data course", error);
    throw error;
  }
};

// isi dari mockapi tersebut
// json = [
//   {
//     "id": "card_1",
//     "categoryId": "web-dev",
//     "image": "catalog_1.jpg",
//     "title": "Front-End Web Development",
//     "description": "Kuasai HTML, CSS, dan framework modern seperti React untuk membangun antarmuka website yang responsif dan interaktif.",
//     "tutorAvatar": "avatar_1.png",
//     "tutorName": "Bowo",
//     "tutorJob": "Senior Front-End Engineer",
//     "tutorCompany": "Tech Corporate BUMN",
//     "stars": 4.5,
//     "totalRating": 100,
//     "price": 500000
//   },
//   {
//     "id": "card_2",
//     "categoryId": "web-dev",
//     "image": "catalog_2.jpg",
//     "title": "Full-Stack JavaScript Mastery",
//     "description": "Kuasai ekosistem JavaScript dari client-side hingga server-side untuk membangun aplikasi web modern berskala besar.",
//     "tutorAvatar": "avatar_2.png",
//     "tutorName": "Rian Kurnia",
//     "tutorJob": "Tech Lead Full-Stack",
//     "tutorCompany": "Gojek",
//     "stars": 4.9,
//     "totalRating": 342,
//     "price": 850000
//   },
//   {
//     "id": "card_3",
//     "categoryId": "data-science",
//     "image": "catalog_3.jpg",
//     "title": "Python for Data Science & AI",
//     "description": "Pelajari analisis data, visualisasi interaktif, hingga pemodelan Machine Learning dengan kurikulum berbasis proyek riil.",
//     "tutorAvatar": "avatar_3.png",
//     "tutorName": "Siti Rahma",
//     "tutorJob": "Data Scientist Specialist",
//     "tutorCompany": "SatuData Indonesia",
//     "stars": 3.8,
//     "totalRating": 215,
//     "price": 750000
//   },
//   {
//     "id": "card_4",
//     "categoryId": "design",
//     "image": "catalog_4.jpg",
//     "title": "UI/UX Design Fundamentals",
//     "description": "Rancang antarmuka aplikasi yang estetik dan ramah pengguna melalui riset mendalam, wireframing, hingga prototyping interaktif.",
//     "tutorAvatar": "avatar_4.png",
//     "tutorName": "Aris Munandar",
//     "tutorJob": "VP of Product & UI/UX",
//     "tutorCompany": "Tokopedia",
//     "stars": 4.7,
//     "totalRating": 189,
//     "price": 450000
//   },
//   {
//     "id": "card_5",
//     "categoryId": "design",
//     "image": "catalog_5.jpg",
//     "title": "Cyber Security Specialist",
//     "description": "Pahami teknik pengamanan jaringan, analisis celah keamanan, dan mitigasi serangan siber untuk melindungi aset digital perusahaan.",
//     "tutorAvatar": "avatar_5.png",
//     "tutorName": "Dedi Wijaya",
//     "tutorJob": "Cyber Security Analyst",
//     "tutorCompany": "Badan Siber Sandi Negara",
//     "stars": 4.6,
//     "totalRating": 95,
//     "price": 900000
//   },
//   {
//     "id": "card_6",
//     "categoryId": "web-dev",
//     "image": "catalog_6.jpg",
//     "title": "Cloud Computing & DevOps",
//     "description": "Pelajari otomatisasi infrastruktur, CI/CD pipelines, dan manajemen server cloud menggunakan teknologi industri terpopuler.",
//     "tutorAvatar": "avatar_6.png",
//     "tutorName": "Faisal Amir",
//     "tutorJob": "Cloud Solution Architect",
//     "tutorCompany": "Telkom Indonesia",
//     "stars": 4.8,
//     "totalRating": 150,
//     "price": 800000
//   },
//   {
//     "id": "card_7",
//     "categoryId": "web-dev",
//     "image": "catalog_7.jpg",
//     "title": "Mobile App Development with Flutter",
//     "description": "Bangun aplikasi performa tinggi untuk Android dan iOS sekaligus hanya dengan menggunakan satu codebase tangguh.",
//     "tutorAvatar": "avatar_7.png",
//     "tutorName": "Nadia Utami",
//     "tutorJob": "Senior Mobile Developer",
//     "tutorCompany": "Bukalapak",
//     "stars": 4.9,
//     "totalRating": 280,
//     "price": 650000
//   },
//   {
//     "id": "card_8",
//     "categoryId": "design",
//     "image": "catalog_8.jpg",
//     "title": "Product Management Bootcamp",
//     "description": "Kembangkan keahlian dalam merancang strategi produk, analisis pasar, serta memimpin tim developer menuju peluncuran sukses.",
//     "tutorAvatar": "avatar_8.png",
//     "tutorName": "Hendra Putera",
//     "tutorJob": "Head of Product Management",
//     "tutorCompany": "Traveloka",
//     "stars": 2.5,
//     "totalRating": 76,
//     "price": 550000
//   },
//   {
//     "id": "card_9",
//     "categoryId": "web-dev",
//     "image": "catalog_9.jpg",
//     "title": "Backend Engineering",
//     "description": "Kuasai arsitektur server, manajemen database relasional/non-relasional, serta pembuatan API yang aman dan scalable.",
//     "tutorAvatar": "avatar_1.png",
//     "tutorName": "Agus Pratama",
//     "tutorJob": "Principal Backend Architect",
//     "tutorCompany": "Bank Mandiri Digital",
//     "stars": 4,
//     "totalRating": 412,
//     "price": 950000
//   }
// ]
