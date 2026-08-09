import NavbarLeft from "../molecules/NavbarLeft";
import Button from "../atoms/Button";
import DropdownMenu from "../molecules/NavbarRight";

import { Link } from "react-router";
import { useState } from "react";

function Navbar({ isLogin = false }) {
  return (
    <header className="sticky w-full min-h-18.5 top-0 z-50 bg-primaryBg border-y border-border lg:border-t-0 py-4 px-6 lg:py-3 lg:px-30 flex justify-between items-center gap-9">
      <NavbarLeft />

      <DropdownMenu />
    </header>
  );
}

export default Navbar;
