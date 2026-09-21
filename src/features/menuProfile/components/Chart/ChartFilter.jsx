import { ChevronDown } from "lucide-react";
import { useState } from "react";

function ChartFilter() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="relative min-w-30.5 h-12 border-border border rounded-[10px] flex items-center justify-center gap-2 ">
      <select
        className={`w-full h-full appearance-none pl-3 pr-10 outline-none bodyMedium-M cursor-pointer bg-transparent transition-colors ${selectedValue === "" ? "text-textDark-secondary" : "text-textDark-primary"}
        `}
        onChange={(e) => setSelectedValue(e.target.value)}
        value={selectedValue}
      >
        <option className="text-textDark-secondary" value="" disabled>
          Urutkan
        </option>
        <option value="newest" className="text-textDark-primary">
          Terbaru
        </option>
      </select>
      <div className="absolute right-3 pointer-events-none flex items-center justify-center">
        <ChevronDown className="size-6 text-textDark-secondary" />
      </div>
    </div>
  );
}

export default ChartFilter;
