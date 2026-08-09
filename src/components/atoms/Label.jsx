function Label({
    children,
    htmlFor,
    className
}) {

    return (
        <label htmlFor={htmlFor} className={`bodySmall-R lg:bodyMedium-R text-textDark-secondary pb-1 flex gap-1 ${className }`}>
            {children} <span className="text-error-default">*</span>
        </label>
    )
}

export default Label