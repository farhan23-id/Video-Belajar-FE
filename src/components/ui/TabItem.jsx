

function TabItem({ label, isActive, onClick }) {

    return (
        <button
            onClick={onClick}
            className={`relative bodyMedium-M py-3 pr-9 transition-colors duration-200 whitespace-nowrap cursor-pointer ${isActive ? "text-tertiary" : "text-textDark-secondary hover:text-textDark-primary"}`}>
            {label}
            {isActive && (
                <span className="absolute h-1.5 w-[50%] rounded-[10px] bg-tertiary bottom-0 left-0" />
            )}
        </button>
    )
}

export default TabItem