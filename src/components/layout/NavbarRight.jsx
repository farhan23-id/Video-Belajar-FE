import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import ProfilePicture from "../../features/menuProfile/components/ProfilePicture";
import HamburgerBtn from "../ui/HamburgerBtn";
import DropdownItem from "../ui/DropdownItem";
import Button from "../ui/Button";
import useAuthStore from "../../features/auth/stores/authStore";

const menuItems = [
  { label: "Login", path: "/login", type: "guestOnly" },
  { label: "Register", path: "/register", type: "guestOnly" },
  { label: "Admin Dashboard", path: "/adminDashboard", role: "admin" },
  { label: "Profil Saya", path: "/menu/editProfile", type: "authOnly" },
  { label: "Kelas Saya", path: "/menu/myCourse", type: "always" },
  { label: "Pesanan Saya", path: "/menu/chart", type: "always" },
  { label: "Keluar", path: "/", type: "authOnly", isLogout: true },
];

function NavbarRight() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, isLogin, logout } = useAuthStore();

  const filteredMenu = menuItems.filter((item) => {
    if (item.role) {
      return isLogin && user?.role === item.role;
    }

    if (item.type === "always") return true;
    return isLogin ? item.type === "authOnly" : item.type === "guestOnly";
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
    if (item.isLogout) {
      logout();
      navigate("/login");
    }
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {isLogin ? (
        <ProfilePicture
          onClick={handleToggle}
          className={`hidden size-11 lg:inline-block`}
          src={user?.avatar || undefined}
        />
      ) : (
        <div className="hidden lg:flex gap-4">
          <Link to="/login">
            <Button variant="primaryContained" className="">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="primaryOutlined" className="">
              Register
            </Button>
          </Link>
        </div>
      )}

      <HamburgerBtn onClick={handleToggle} />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-50 rounded-md bg-white shadow-[0_0px_1px_0px_rgba(62,67,74,0.31),0_18px_28px_0px_rgba(62,67,74,0.15)] z-50 ">
          <div className="py-0.5">
            {filteredMenu.map((item, index) => (
              <DropdownItem
                key={index}
                label={item.label}
                to={item.path}
                isLogin={item.isLogout || false}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarRight;
