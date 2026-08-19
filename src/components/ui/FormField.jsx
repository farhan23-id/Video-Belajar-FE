import Label from "./Label";
import Input from "./Input";

function FormField({
  label,
  id,
  type,
  showPassword,
  onTogglePassword,
  htmlFor,
  ...inputProps
}) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={id}
        type={type}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
        {...inputProps}
      />
    </div>
  );
}

export default FormField;
