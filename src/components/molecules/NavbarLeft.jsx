import Logo from "../atoms/Logo";
import NavbarLink from "../atoms/NavbarLink";

function NavbarLeft() {
  return (
    <div className="navLeft flex items-center lg:justify-between grow gap-6">
      <Logo variant="navbar" />
      <NavbarLink variant="categories">Kategori</NavbarLink>
    </div>
  );
}

export default NavbarLeft;
