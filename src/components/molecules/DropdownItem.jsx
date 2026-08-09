import { Link } from "react-router";
import LogoutIcon from "../atoms/LogoutIcon";

function DropdownItem({ label, to, isLogin, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-1.25 px-3 py-4 bg-primaryBg border-b border-border bodyMedium-M hover:bg-secondaryBg
        ${isLogin ? "text-error-default " : "text-textDark-secondary"}
      `}
    >
      <span>{label}</span>
      {isLogin && <LogoutIcon className="size-6 text-error-default" />}
    </Link>
  );
}

export default DropdownItem;
