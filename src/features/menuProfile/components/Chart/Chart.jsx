import ChartNav from "./ChartNav";
import { useState } from "react";

const orders = [
  {
    id: "order-1",
    status: "waiting",
    orderDate: "2025-01-10",
    course: {
      id: "1",
      courseTitle: "Belajar React dari Nol",
      description: "Kuasai React lewat praktik langsung",
      courseImage: "/images/courses/react-basic.jpg",
      tutorName: "Andi Pratama",
      tutorAvatar: "/images/tutors/andi.jpg",
      tutorJob: "Frontend Engineer",
      tutorCompany: "Tokopedia",
      stars: 4.8,
      totalRating: 245,
      price: 299000,
    },
  },
  {
    id: "order-2",
    status: "waiting",
    orderDate: "2025-01-12",
    course: {
      id: "2",
      courseTitle: "UI/UX Design Fundamentals",
      description: "Belajar prinsip dasar desain produk digital",
      courseImage: "/images/courses/uiux-basic.jpg",
      tutorName: "Siti Rahma",
      tutorAvatar: "/images/tutors/siti.jpg",
      tutorJob: "Product Designer",
      tutorCompany: "Gojek",
      stars: 4.6,
      totalRating: 189,
      price: 250000,
    },
  },
  {
    id: "order-3",
    status: "waiting",
    orderDate: "2025-01-14",
    course: {
      id: "3",
      courseTitle: "Data Science dengan Python",
      description: "Analisis data dari dasar hingga machine learning",
      courseImage: "/images/courses/data-science.jpg",
      tutorName: "Budi Santoso",
      tutorAvatar: "/images/tutors/budi.jpg",
      tutorJob: "Data Scientist",
      tutorCompany: "Traveloka",
      stars: 4.9,
      totalRating: 312,
      price: 399000,
    },
  },
  {
    id: "order-4",
    status: "failed",
    orderDate: "2025-01-15",
    course: {
      id: "4",
      courseTitle: "Backend Development dengan Node.js",
      description: "Bangun REST API production-ready",
      courseImage: "/images/courses/nodejs-backend.jpg",
      tutorName: "Rina Wijaya",
      tutorAvatar: "/images/tutors/rina.jpg",
      tutorJob: "Backend Engineer",
      tutorCompany: "Bukalapak",
      stars: 4.7,
      totalRating: 156,
      price: 349000,
    },
  },
];

function Chart() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredOrders = orders.filter((order) => {
    if (activeCategory === "all") return true;
    return order.status === activeCategory;
  });
  return (
    <div>
      <h1>Chart Page</h1>
      <ChartNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders.map((order) => (
          <li key={order.id} className="border p-4 rounded-lg">
            <p className="font-semibold">{order.course.courseTitle}</p>
            <p className="text-sm text-textDark-secondary">
              {order.course.tutorName} — {order.course.tutorCompany}
            </p>
            <p className="text-sm">Status: {order.status}</p>
            <p className="text-sm">
              Rp{order.course.price.toLocaleString("id-ID")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chart;
