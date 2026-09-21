import Input from "../../../../components/ui/Input";
import { Search } from "lucide-react";

function ChartSearch() {
  return (
    <div className="w-full lg:max-w-55 h-12 border-border border rounded-[10px] px-3 flex items-center justify-center gap-2">
      <Input variant={"chartSearch"} placeholder={"Cari Kelas"} />
      <Search className="text-textDark-secondary size-6" />
    </div>
  );
}

export default ChartSearch;
