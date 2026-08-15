function Fieldset({ label, children, className = "" }) {
  return (
    <fieldset
      className={`relative h-12.25 box-border border border-border rounded-[10px] px-3 focus-within:border-primary group flex ${className}`}
    >
      <legend className="absolute -top-2 left-2.5 px-1 bodySmall-M text-textDark-secondary bg-primaryBg group-focus-within:text-primary leading-none">
        {label}
      </legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;