function ProfileNavItem({ icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-3 items-center p-3 rounded-sm bodyLarge-B border cursor-pointer ${isActive ? "bg-secondary-100 border-secondary text-secondary" : "bg-primaryBg border-primaryBg text-textDark-disabled hover:border-secondary"}`}
    >
      <span className="size-6">{icon}</span> {label}
    </button>
  );
}

export default ProfileNavItem;
 