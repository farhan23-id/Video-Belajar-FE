const styles = {
    primaryContained: 'bg-primary border border-primary text-textLight-primary',
    primaryShadow: 'bg-primary-100 border border-primary-100 text-primary',
    primaryOutlined: 'bg-primaryBg border border-primary text-primary',
    secondaryContained: 'bg-secondary border border-secondary text-textLight-primary',
    secondaryShadow: 'bg-secondary-100 border border-secondary-100 text-secondary',
    secondaryOutlined: 'bg-primaryBg border border-secondary text-secondary',
    disabledContained: 'bg-greyscale-400 border border-greyscale-400 text-textDark-disabled',
    disabledShadow: 'bg-greyscale-300 border border-greyscale-300 text-textDark-disabled',
    disabledOutlined: 'bg-greyscale-200 border border-textDark-disabled text-textDark-disabled',
    blank: 'bg-primaryBg border border-border text-textDark-secondary',
}


function Button({
    children,
    variant = '',
    className = '',
    type = 'button',
    ...props
}) {

    return (
        <button className={`flex items-center justify-center gap-2 py-1.75 lg:py-2.5 px-5.5 lg:px-6.5 rounded-[10px] cursor-pointer active:scale-95 ${styles[variant] || styles.primaryContained} ${className}`}
            {...props}
            type={type}>
            {children}
        </button>
    )
}

export default Button;