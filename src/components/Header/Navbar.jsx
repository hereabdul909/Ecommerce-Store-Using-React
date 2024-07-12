import { Nav, Icon } from "./StyledNavbar";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import {
  FiAlignJustify,
  FiUser,
  FiShoppingCart,
  FiSearch,
  FiArrowLeft,
} from "react-icons/fi";
import { useRef } from "react";
function Navbar({size}) {
  const Menu = useRef(null);
  const toggleMenu = () => {
    Menu.current.style.left = "0";
  };
  const closeMenu = () => {
    Menu.current.style.left = "-100%";
  };
  return (
    <Nav>
      <div className="navbar">
        <FiAlignJustify className="bars" onClick={toggleMenu}></FiAlignJustify>
        <div className="logo">
         <Link to='/'> <img src={logo} alt="logo" /></Link>
        </div>
        <ul ref={Menu}>
          <FiArrowLeft className="left_menu" onClick={closeMenu}></FiArrowLeft>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/">Kids</Link>
          </li>
          <li>
            <a href="/">Beauty</a>
          </li>
        </ul>
        <div className="find">
          <FiSearch className="search"></FiSearch>
          <input type="text" placeholder="Search For Products..." />
        </div>
      </div>
      <Icon>
        <FiUser className="icon"></FiUser>
        <Link to='/cart'><FiShoppingCart className="icon"></FiShoppingCart></Link>
        <span>{size}</span>
      </Icon>
    </Nav>
  );
}

export default Navbar;
