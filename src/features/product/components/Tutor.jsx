function Tutor({ avatar, name, job, company }) {
  return (
    <div className="flex items-center gap-2 lg:gap-2.5">
      <img
        src={`asset/avatar/${avatar}`}
        alt={name}
        className="rounded-[0.625rem] w-9 h-9 lg:w-10 lg:h-10"
      />
      <div>
        <h3 className="bodySmall-M lg:bodyMedium-M text-textDark-primary">
          {name}
        </h3>
        <p className="text-[0.75rem] bodySmall-R lg:text-[14px] text-textDark-secondary">
          {job} <span className="hidden lg:inline-block">di</span>{" "}
          <span className="bodySmall-B hidden lg:inline-block">{company}</span>
        </p>
      </div>
    </div>
  );
}

export default Tutor;