import SocMedBubble from "../atoms/SocMedBubble";
import { SocialMedias } from "../../constants/Footer";

function FooterBottom() {
  return (
    <div className="ftr-author flex flex-col-reverse gap-3 lg:flex-row lg:justify-between">
      <p className="ftr-copyright font-sans font-medium text-[1rem] leading-[140%] tracking-[0.2px] text-textDark-secondary">
        &copy;2026 Farhan Risdianto All rights reserved.
      </p>

      <div className="flex gap-3.75">
        {SocialMedias.map((e, i) => {
          return (
            <SocMedBubble
              key={i}
              className={e.className}
              link={e.link}
              image={e.image}
              alt={e.alt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FooterBottom;
