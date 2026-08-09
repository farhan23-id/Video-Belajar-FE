import { useState } from "react";
import Logo from "../atoms/Logo";

import FooterLink from "../atoms/FooterLink";
import { footerLinks } from "../../constants/Footer";

function FooterTop() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-4 lg:max-w-88">
        <Logo variant="footer" />

        <div className="flex flex-col gap-2 lg:gap-3">
          <h3 className="bodySmall-B lg:bodyLarge-B text-textDark-primary">
            Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.id!
          </h3>
          <p className="bodySmall-R lg:bodyMedium-R text-textDark-primary">
            Jalan Kutai Utara Nomor 1, Kelurahan Sumber, Kecamatan Banjarsari,
            Kota Surakarta (Solo)
          </p>
          <p className="font-sans font-normal text-[0.875rem] leading-[140%] tracking-[0.2px] text-textDark-primary lg:text-[1rem]">
            +62-819-0300-4666 (Fufufafa)
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-12">
        {footerLinks.map((group, index) => {
          const isCurrentOpen = openIndex === index;

          return (
            <div key={index} className="flex flex-col gap-2 lg:gap-3 ">
              <div
                onClick={() => toggleMenu(index)}
                className="flex justify-between items-center cursor-pointer lg:cursor-default"
              >
                <h3 className="bodyMedium-B text-textDark-primary  ">
                  {group.header}
                </h3>

                <img
                  className={`lg:hidden transition-transform duration-300 ${isCurrentOpen ? "rotate-90" : ""}`}
                  src="asset/icon/arrow.png"
                  alt="chevron"
                />
              </div>

              <ul
                className={`flex flex-col gap-3.25 pb-3 lg:pb-0 ${isCurrentOpen ? "flex" : "hidden lg:flex"}`}
              >
                {group.children.map((link, childIndex) => (
                  <li key={childIndex}>
                    <FooterLink to={link.path}>{link.title}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FooterTop;
