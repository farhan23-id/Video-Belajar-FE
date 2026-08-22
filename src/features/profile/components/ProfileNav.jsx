import ProfileNavItem from "./ProfileNavItem";
import { UserRoundPen, BookMarked, ShoppingBasket } from "lucide-react";

function ProfileNav({ activeMenu, onSelectMenu }) {
  const profileNavData = [
    {
      path: "edit-profile",
      header: "Ubah Profile",
      description: "Ubah Data Diri Anda",
      icon: <UserRoundPen />,
      label: "Profile",
    },
    {
      path: "my-class",
      header: "Kelas Saya",
      description: "Daftar Kelas Saya",
      icon: <BookMarked />,
      label: "Kelas Saya",
    },
    {
      path: "my-order",
      header: "Pesanan Saya",
      description: "Daftar Pesanan Saya",
      icon: <ShoppingBasket />,
      label: "Pesanan Saya",
    },
  ];

  const activeItem =
    profileNavData.find((e) => e.path === activeMenu) ?? profileNavData[0];

  return (
    <div className="w-full flex flex-col gap-6 lg:max-w-73">
      <div className="flex flex-col gap-2.5">
        <h5 className="heading-7 text-textDark-primary lg:heading-5">
          {activeItem.header}
        </h5>
        <p className="bodySmall-R text-textDark-secondary lg:bodyMedium-R">
          {activeItem.description}
        </p>
      </div>

      <div className="bg-primaryBg border border-border rounded-[10px] p-5 flex flex-col gap-2 lg:p-6">
        {profileNavData.map((element) => (
          <ProfileNavItem
            key={element.path}
            icon={element.icon}
            label={element.label}
            isActive={activeMenu === element.path}
            onClick={() => onSelectMenu(element.path)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileNav;
