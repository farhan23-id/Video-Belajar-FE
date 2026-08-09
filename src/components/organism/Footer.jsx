import FooterTop from "../molecules/FooterTop";
import FooterBottom from "../molecules/FooterBottom";

function Footer() {
  return (
    <footer className="bg-primaryBg border-t border-border flex flex-col gap-4 p-5 lg:py-15 lg:px-30 lg:gap-5">
      <FooterTop />
      <hr className="border-border lg:mt-8" />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
