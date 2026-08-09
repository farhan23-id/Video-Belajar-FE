import { Link } from "react-router"

function NavbarLink({ variant = 'categories', children }) {

    const styles = {
        categories: {
            target: '/categories',
            class: 'hidden lg:inline-block bodyMedium-M text-textDark-secondary hover:underline active:text-info-pressed'
        }
    }

    const navLinkstyle = styles[variant] || styles.categories;

    return (
        <>
            <Link to={navLinkstyle.target} className={navLinkstyle.class}>
                {children}
            </Link>
        </>
    )
}

export default NavbarLink;