import { Link } from "react-router"

function FooterLink({to, children }) {
  return (
    <Link to={to} className="bodySmall-M lg:bodyMedium-M text-textDark-secondary hover:underline active:text-textDark-primary">
        {children}
    </Link>
  )
}

export default FooterLink