import { NavLink } from "react-bootstrap";

const NavbarLink = ({categorias}) => {
return (
    <NavLink to={`/categorias/${categorias}`} className="navItems">
        {categorias}
    </NavLink>
)
}

export default NavbarLink;


