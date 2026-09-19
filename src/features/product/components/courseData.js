export const products = {
  product_1: {
    title: "Front-End Web Development",
    description:
      "Kuasai HTML, CSS, dan framework modern seperti React untuk membangun antarmuka website yang responsif dan interaktif.",
  },
  product_2: {
    title: "Full-Stack JavaScript Mastery",
    description:
      "Kuasai ekosistem JavaScript dari client-side hingga server-side untuk membangun aplikasi web modern berskala besar.",
  },
  product_3: {
    title: "Python for Data Science & AI",
    description:
      "Pelajari analisis data, visualisasi interaktif, hingga pemodelan Machine Learning dengan kurikulum berbasis proyek riil.",
  },
  product_4: {
    title: "UI/UX Design Fundamentals",
    description:
      "Rancang antarmuka aplikasi yang estetik dan ramah pengguna melalui riset mendalam, wireframing, hingga prototyping interaktif.",
  },
  product_5: {
    title: "Cyber Security Specialist",
    description:
      "Pahami teknik pengamanan jaringan, analisis celah keamanan, dan mitigasi serangan siber untuk melindungi aset digital perusahaan.",
  },
  product_6: {
    title: "Cloud Computing & DevOps",
    description:
      "Pelajari otomatisasi infrastruktur, CI/CD pipelines, dan manajemen server cloud menggunakan teknologi industri terpopuler.",
  },
  product_7: {
    title: "Mobile App Development with Flutter",
    description:
      "Bangun aplikasi performa tinggi untuk Android dan iOS sekaligus hanya dengan menggunakan satu codebase tangguh.",
  },
  product_8: {
    title: "Product Management Bootcamp",
    description:
      "Kembangkan keahlian dalam merancang strategi produk, analisis pasar, serta memimpin tim developer menuju peluncuran sukses.",
  },
  product_9: {
    title: "Backend Engineering",
    description:
      "Kuasai arsitektur server, manajemen database relasional/non-relasional, serta pembuatan API yang aman dan scalable.",
  },
};

export const cardsData = {
  card_1: {
    categoryId: "web-dev",
    image: "catalog_1.jpg",
    product: "product_1",
    tutor: "tutor_1",
    stars: "4.5",
    totalRating: "100",
    price: "Rp500k",
  },
  card_2: {
    categoryId: "web-dev",
    image: "catalog_2.jpg",
    product: "product_2",
    tutor: "tutor_2",
    stars: "4.9",
    totalRating: "342",
    price: "Rp850k",
  },
  card_3: {
    categoryId: "data-science",
    image: "catalog_3.jpg",
    product: "product_3",
    tutor: "tutor_3",
    stars: "3.8",
    totalRating: "215",
    price: "Rp750k",
  },
  card_4: {
    categoryId: "design",
    image: "catalog_4.jpg",
    product: "product_4",
    tutor: "tutor_4",
    stars: "4.7",
    totalRating: "189",
    price: "Rp450k",
  },
  card_5: {
    categoryId: "design",
    image: "catalog_5.jpg",
    product: "product_5",
    tutor: "tutor_5",
    stars: "4.6",
    totalRating: "95",
    price: "Rp900k",
  },
  card_6: {
    categoryId: "web-dev",
    image: "catalog_6.jpg",
    product: "product_6",
    tutor: "tutor_6",
    stars: "4.8",
    totalRating: "150",
    price: "Rp800k",
  },
  card_7: {
    categoryId: "web-dev",
    image: "catalog_7.jpg",
    product: "product_7",
    tutor: "tutor_7",
    stars: "4.9",
    totalRating: "280",
    price: "Rp650k",
  },
  card_8: {
    categoryId: "design",
    image: "catalog_8.jpg",
    product: "product_8",
    tutor: "tutor_8",
    stars: "2.5",
    totalRating: "76",
    price: "Rp550k",
  },
  card_9: {
    categoryId: "web-dev",
    image: "catalog_9.jpg",
    product: "product_9",
    tutor: "tutor_9",
    stars: "4",
    totalRating: "412",
    price: "Rp950k",
  },
};

export const cardVariant = [
  "card_1",
  "card_2",
  "card_3",
  "card_4",
  "card_5",
  "card_6",
  "card_7",
  "card_8",
  "card_9",
];

export const courses = [
  {
    id: "card_1",
    categoryId: "web-dev",
    image: "catalog_1.jpg",
    title: "Front-End Web Development",
    description:
      "Kuasai HTML, CSS, dan framework modern seperti React untuk membangun antarmuka website yang responsif dan interaktif.",
    tutorName: "Tutor 1",
    tutorAvatar: "tutor_1.jpg",
    tutorJob: "Frontend Engineer",
    tutorCompany: "Company 1",
    stars: 4.5,
    totalRating: 100,
    price: 500000,
  },
  {
    id: "card_2",
    categoryId: "web-dev",
    image: "catalog_2.jpg",
    title: "Full-Stack JavaScript Mastery",
    description:
      "Kuasai ekosistem JavaScript dari client-side hingga server-side untuk membangun aplikasi web modern berskala besar.",
    tutorName: "Tutor 2",
    tutorAvatar: "tutor_2.jpg",
    tutorJob: "Full-Stack Engineer",
    tutorCompany: "Company 2",
    stars: 4.9,
    totalRating: 342,
    price: 850000,
  },
  {
    id: "card_3",
    categoryId: "data-science",
    image: "catalog_3.jpg",
    title: "Python for Data Science & AI",
    description:
      "Pelajari analisis data, visualisasi interaktif, hingga pemodelan Machine Learning dengan kurikulum berbasis proyek riil.",
    tutorName: "Tutor 3",
    tutorAvatar: "tutor_3.jpg",
    tutorJob: "Data Scientist",
    tutorCompany: "Company 3",
    stars: 3.8,
    totalRating: 215,
    price: 750000,
  },
  {
    id: "card_4",
    categoryId: "design",
    image: "catalog_4.jpg",
    title: "UI/UX Design Fundamentals",
    description:
      "Rancang antarmuka aplikasi yang estetik dan ramah pengguna melalui riset mendalam, wireframing, hingga prototyping interaktif.",
    tutorName: "Tutor 4",
    tutorAvatar: "tutor_4.jpg",
    tutorJob: "Product Designer",
    tutorCompany: "Company 4",
    stars: 4.7,
    totalRating: 189,
    price: 450000,
  },
  {
    id: "card_5",
    categoryId: "design",
    image: "catalog_5.jpg",
    title: "Cyber Security Specialist",
    description:
      "Pahami teknik pengamanan jaringan, analisis celah keamanan, dan mitigasi serangan siber untuk melindungi aset digital perusahaan.",
    tutorName: "Tutor 5",
    tutorAvatar: "tutor_5.jpg",
    tutorJob: "Security Engineer",
    tutorCompany: "Company 5",
    stars: 4.6,
    totalRating: 95,
    price: 900000,
  },
  {
    id: "card_6",
    categoryId: "web-dev",
    image: "catalog_6.jpg",
    title: "Cloud Computing & DevOps",
    description:
      "Pelajari otomatisasi infrastruktur, CI/CD pipelines, dan manajemen server cloud menggunakan teknologi industri terpopuler.",
    tutorName: "Tutor 6",
    tutorAvatar: "tutor_6.jpg",
    tutorJob: "DevOps Engineer",
    tutorCompany: "Company 6",
    stars: 4.8,
    totalRating: 150,
    price: 800000,
  },
  {
    id: "card_7",
    categoryId: "web-dev",
    image: "catalog_7.jpg",
    title: "Mobile App Development with Flutter",
    description:
      "Bangun aplikasi performa tinggi untuk Android dan iOS sekaligus hanya dengan menggunakan satu codebase tangguh.",
    tutorName: "Tutor 7",
    tutorAvatar: "tutor_7.jpg",
    tutorJob: "Mobile Engineer",
    tutorCompany: "Company 7",
    stars: 4.9,
    totalRating: 280,
    price: 650000,
  },
  {
    id: "card_8",
    categoryId: "design",
    image: "catalog_8.jpg",
    title: "Product Management Bootcamp",
    description:
      "Kembangkan keahlian dalam merancang strategi produk, analisis pasar, serta memimpin tim developer menuju peluncuran sukses.",
    tutorName: "Tutor 8",
    tutorAvatar: "tutor_8.jpg",
    tutorJob: "Product Manager",
    tutorCompany: "Company 8",
    stars: 2.5,
    totalRating: 76,
    price: 550000,
  },
  {
    id: "card_9",
    categoryId: "web-dev",
    image: "catalog_9.jpg",
    title: "Backend Engineering",
    description:
      "Kuasai arsitektur server, manajemen database relasional/non-relasional, serta pembuatan API yang aman dan scalable.",
    tutorName: "Tutor 9",
    tutorAvatar: "tutor_9.jpg",
    tutorJob: "Backend Engineer",
    tutorCompany: "Company 9",
    stars: 4.0,
    totalRating: 412,
    price: 950000,
  },
];