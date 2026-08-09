

function Input({
    id,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    className,
    maxLength
}) {

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            maxLength={maxLength}
            className={`w-full h-12 border border-border rounded-md py-1 px-2.5 ${className}`} />
    )
}

export default Input