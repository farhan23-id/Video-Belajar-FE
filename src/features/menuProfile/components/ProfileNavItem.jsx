import { Link } from "react-router";

function ProfileNavItem({ icon, label, isActive, to, }) {
  return (
    <Link
      to={to}
      className={`flex gap-3 items-center p-3 rounded-sm bodyLarge-B border cursor-pointer ${
        isActive
          ? "bg-secondary-100 border-secondary text-secondary"
          : "bg-primaryBg border-primaryBg text-textDark-disabled hover:border-secondary"
      }`}
    >
      <span className="flex items-center justify-center">{icon}</span> {label}
    </Link>
  );
}

export default ProfileNavItem;
