import Label from "./Label";
import Input from "./Input";

function FormField({
  label,
  id,
  type,
  showPassword,
  onTogglePassword,
  ...inputProps
}) {
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
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