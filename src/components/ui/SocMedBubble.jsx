function SocMedBubble({ link, className, image, alt }) {
  return (
    <a
      href={link}
      className={`flex justify-center items-center size-8.75 border-[1.5px] border-border-sosmed rounded-full ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="size-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
        src={`asset/icon/${image}`}
        alt={alt}
      />
    </a>
  );
}

export default SocMedBubble;
