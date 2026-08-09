// export interface FooterChildLink {
//   title: string;
//   path: string;
// }

// export interface FooterGroup {
//   header: string;
//   children: FooterChildLink[];
// }

// export const footerLinks: FooterGroup[]

export const footerLinks = [
  {
    header: "Kategori",
    children: [
      { title: "Digital & Teknologi", path: "/kategori/digital-teknologi" },
      { title: "Pemasaran", path: "/kategori/pemasaran" },
      { title: "Manajemen Bisnis", path: "/kategori/manajemen-bisnis" },
      { title: "Pengembangan Diri", path: "/kategori/pengembangan-diri" },
      { title: "Desain", path: "/kategori/desain" },
    ],
  },
  {
    header: "Perusahaan",
    children: [
      { title: "Tentang Kami", path: "/tentang-kami" },
      { title: "FAQ", path: "/faq" },
      { title: "Kebijakan Privasi", path: "/kebijakan-privasi" },
      { title: "Ketentuan Layanan", path: "/ketentuan-layanan" },
      { title: "Bantuan", path: "/bantuan" },
    ],
  },
  {
    header: "Komunitas",
    children: [
      { title: "Tips Sukses", path: "/komunitas/tips-sukses" },
      { title: "Blog", path: "/blog" },
    ],
  },
];

export const SocialMedias = [
  {
    link: "https://www.youtube.com/",
    image: "linkedin.png",
    alt: "linkedin.png",
    className:
      "transition-colors duration-200 hover:border-[var(--color-linkedin)] hover:bg-[var(--color-linkedin)] group",
  },
  {
    link: "#",
    image: "facebook.png",
    alt: "facebook.png",
    className:
      "transition-colors duration-200 hover:border-[var(--color-facebook)] hover:bg-[var(--color-facebook)] group",
  },
  {
    link: "https://www.instagram.com/farhan.risdianto/",
    image: "instagram.png",
    alt: "instagram.png",
    className:
      "transition-colors duration-200 hover:border-[var(--color-instagram)] hover:bg-[var(--color-instagram)] group",
  },
  {
    link: "#",
    image: "twitter.png",
    alt: "twitter.png",
    className:
      "transition-colors duration-200 hover:border-[var(--color-twitter)] hover:bg-[var(--color-twitter)] group",
  },
  
];
