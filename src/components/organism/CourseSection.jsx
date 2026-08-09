import { useState } from "react";
import CatalogHeader from "../atoms/CatalogHeader.jsx";
import CategoryTabs from "../molecules/CategoryTabs.jsx";
import ProductCard from "../molecules/ProductCard.jsx";

import { cardVariant, cardsData } from "../../constants/courseData.js";

function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  // console.log("Kategori Aktif saat ini:", activeCategory);

  const filteredVariants = cardVariant.filter((variant) => {
    const card = cardsData[variant];
    if (activeCategory === "all") return true;
    return card?.categoryId === activeCategory;
  });
  // console.log("Kartu yang lolos filter:", filteredVariants);

  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      <CatalogHeader />
      <CategoryTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVariants.map((variant) => (
          <ProductCard key={variant} variant={variant} />
        ))}
      </ul>
    </section>
  );
}
export default CourseSection;
