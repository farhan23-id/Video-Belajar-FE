
import TabItem from "../atoms/TabItem"

function CategoryTabs({ activeCategory, onSelectCategory }) {

    const categories = [
        { id: "all", name: "Semua Kelas" },
        { id: "web-dev", name: "Web Development" },
        { id: "design", name: "Design" },
        { id: "data-science", name: "Data Science" },
    ];

    return (
        <div className="flex flex-nowrap overflow-auto scrollbar-none">
            {categories.map((category) => (
                <TabItem
                    key={category.id}
                    label={category.name}
                    isActive={activeCategory === category.id}
                    onClick={() => onSelectCategory(category.id)}
                />
            ))}
        </div>
    )
}

export default CategoryTabs