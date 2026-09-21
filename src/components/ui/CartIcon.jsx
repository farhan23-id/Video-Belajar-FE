import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { selectCartCount } from "../../features/cart/cartSlice.js";

function CartIcon() {
  const count = useSelector(selectCartCount);

  return (
    <div className="relative">
      <ShoppingCart size={22} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
