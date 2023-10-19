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
    <Link to={to} smooth={true} offset={-64} duration={500}>
        <li className='p-4 opacity-50 hover:opacity-100 cursor-pointer transition-all'>      
                {text} 
        </li>
    </Link>
)

const NavbarDesktop = () => {
    return (
        <ul className="hidden md:flex">
            {navLinks.map((link, index) => (
                <NavItem key={index} to={link.to} text={link.text} />
            ))}
        </ul>
    )
}

export default NavbarDesktop;
