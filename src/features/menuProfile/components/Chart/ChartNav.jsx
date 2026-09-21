import TabItem from "../../../../components/ui/TabItem";
import ChartSearch from "./ChartSearch";
import ChartFilter from "./ChartFilter";

const categories = [
  { id: "all", name: "Semua Pesanan" },
  { id: "waiting", name: "Menunggu" },
  { id: "success", name: "Berhasil" },
  { id: "failed", name: "Gagal" },
];

function ChartNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
      <div className="flex">
        {categories.map((category) => (
          <TabItem
            key={category.id}
            label={category.name}
            isActive={activeCategory === category.id}
            onClick={() => onSelectCategory(category.id)}
          />
        ))}
      </div>
      <div className="w-full max-w-89.5 flex items-center justify-between gap-4 lg:flex-row-reverse">
        <ChartFilter />
        <ChartSearch />
      </div>
    </div>
  );
}

export default ChartNav;
