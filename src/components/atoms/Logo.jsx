import { Link } from "react-router"

function Logo({ variant = 'navbar' }) {

    const styles = {
        navbar: {
            link: 'w-38 h-10.5 relative lg:w-59.25 lg:h-14',
            img: 'absolute w-[144.77px] h-[22.56px] top-[9.75px] left-[3.25px] object-contain lg:w-48.25 lg:h-7.5 lg:top-3.25 lg:left-5.5'
        },
        footer: {
            link: 'w-42.5 h-9 relative lg:w-51 lg:h-14',
            img: 'w-[161.61px] h-[25.18px] lg:w-[193.03px] lg:h-[30.08px] relative top-[5.44px] left-[3.79px] block lg:top-3.25 lg:left-1.25'
        }
    };

    const navStyle = styles[variant] || styles.navbar;

    return (
        <Link to='/' className={navStyle.link}>
            <img className={navStyle.img}
                src="asset/Logo.png"
                alt="Logo.png" />
        </Link>
    )
}

export default Logo