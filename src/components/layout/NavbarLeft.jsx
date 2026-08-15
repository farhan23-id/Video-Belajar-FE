import Logo from "../ui/Logo";
import NavbarLink from "../ui/NavbarLink";

function NavbarLeft() {
  return (
    <div className="navLeft flex items-center lg:justify-between grow gap-6">
      <Logo variant="navbar" />
      <NavbarLink variant="categories">Kategori</NavbarLink>
    </div>
  );
}

export default NavbarLeft;
