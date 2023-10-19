import { Link } from 'react-scroll';

//Navbar links
const navLinks = [
    { to: "home", text: "Home" },
    { to: "about", text: "About" },
    { to: "shop", text: "Shop" },
    { to: "contact", text: "Contact" },
]

//Navbar item template
const NavItem = ({ to, text }) => (
    <Link to={to} smooth={true} offset={-63} duration={500}>
        <li className='p-4 border-b-2 border-dark-primary cursor-pointer'> 
                {text}
        </li>
    </Link>
)

const NavBarMobile = ({ isNavVisible }) => {
    return (
        <div className={` ${isNavVisible ? 'visible' : 'hidden'}`}>
            <ul className='bg-dark-secondary h-screen w-2/3'>
                {navLinks.map((link, index) => (
                    <NavItem key={index} to={link.to} text={link.text} />
                ))}
            </ul>
        </div>
    )
}

export default NavBarMobile;