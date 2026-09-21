import ChartNav from "./ChartNav";
import ChartCard from "./ChartCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../redux/slicers/chartSlice";
import { getCourseData } from "../../../product/services/courseData";

function Chart() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [courses, setCourses] = useState([]);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    async function loadCourses() {
      const data = await getCourseData();
      setCourses(data);
    }
    loadCourses();
  }, []);

  const cartWithCourse = cartItems.map((item) => ({
    ...item,
    course: courses.find((c) => c.id === item.courseId),
  }));

  const filteredItems = cartWithCourse.filter((item) => {
    if (activeCategory === "all") return true;
    return item.status === activeCategory;
  });

  console.log(filteredItems);

  return (
    <div className="w-full bg-primaryBg border border-border rounded-[10px] p-5 flex flex-col gap-6">
      <ChartNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {filteredItems.map((item) => (
        <ChartCard
          key={item.id}
          date={item.orderDate}
          image={item.course?.image}
          title={item.course?.title}
          price={item.course?.price}
        />
      ))}
    </div>
  );
}

export default Chart;
