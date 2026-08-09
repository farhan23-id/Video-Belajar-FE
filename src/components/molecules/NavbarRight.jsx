import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import ProfilePicture from "../atoms/ProfilePicture";
import HamburgerBtn from "../atoms/HamburgerBtn";
import DropdownItem from "./DropdownItem";
import Button from "../atoms/Button";

const menuItems = [
  { label: "Login", path: "/login", type: "guestOnly" },
  { label: "Register", path: "/register", type: "guestOnly" },
  { label: "Profil Saya", path: "/profil", type: "authOnly" },
  { label: "Kelas Saya", path: "/kelas", type: "always" },
  { label: "Pesanan Saya", path: "/pesanan", type: "always" },
  { label: "Keluar", path: "/logout", type: "authOnly", isLogout: true },
];

function NavbarRight({ isLogin = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredMenu = menuItems.filter((item) => {
    if (item.type === "always") return true;
    if (isLogin) {
      return item.type === "authOnly";
    } else {
      return item.type === "guestOnly";
    }
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

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {isLogin ? (
        <ProfilePicture
          onClick={handleToggle}
          className={`hidden lg:inline-block`}
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
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarRight;
