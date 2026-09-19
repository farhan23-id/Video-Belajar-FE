import TabItem from "../../../../components/ui/TabItem";

function ChartNav({activeCategory, onSelectCategory}) {
  const categories = [
    { id: "all", name: "Semua Pesanan" },
    { id: "waiting", name: "Menunggu" },
    { id: "success", name: "Berhasil" },
    { id: "failed", name: "Gagal" },
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
  );
}

export default ChartNav;
