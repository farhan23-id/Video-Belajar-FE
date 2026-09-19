import { useEffect, useState } from "react";
import CatalogHeader from "./CatalogHeader.jsx";
import CategoryTabs from "./CategoryTabs.jsx";
import ProductCard from "./ProductCard.jsx";
import { getCourseData } from "../services/courseData.js";

function CourseSection() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState("idle");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    async function loadCourses() {
      setStatus("loading");
      try {
        const data = await getCourseData();
        setCourses(data);
        setStatus("succeeded");
      } catch (error) {
        console.error("Gagal memuat courses:", error);
        setStatus("failed");
      }
    }

    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    if (activeCategory === "all") return true;
    return course.categoryId === activeCategory;
  });

  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      <CatalogHeader />
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Gagal memuat data course.</p>}

      {status === "succeeded" && (
        <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <ProductCard key={course.id} course={course} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CourseSection;