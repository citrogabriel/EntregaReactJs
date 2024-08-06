import { NavItem } from "../NavItem/NavItem.jsx";
import { categorias } from "../../DataJs/Data.js";
import CartWidget from "../CartWidget/CartWidget.jsx";
import NavbarLink from "./NavbarLink.jsx";



const Navbar =  ( { title } )  => {
    return (
        <>
  <div className="container-fluid">
      <img src="https://www.hostingred.com/wp-content/uploads/2015/09/Cloud-blue-200x200.png" alt="" />
  </div>
<nav className="NavItems">
  {categorias.map(
    (element, index) => {
      return <NavbarLink key={index} categorias={element} />;
    }
  )}
</nav>
        <CartWidget/>
        </>
        );
    };

export default Navbar;
