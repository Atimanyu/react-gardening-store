import "./Header.css";
import logo from "../assets/gardening.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import SearchBar from "../Search-bar/Search";
import { useContext } from "react";
import CartContext from "../Context";
function Header() {
  const nav = useNavigate();
  const { cartcount } = useContext(CartContext);
  return (
    <header>
      <div className="container">
        <div className="container-element">
          <img src={logo} alt="screen-reader text" />
          <h2>Gardening Store</h2>
        </div>
        <div>
          <ul className="list">
            <li><Link to="products-grid"
            spy={true}
            smooth={true}
            duration={1500}
            style={{textDecoration: 'none'}}>
              <button onClick={() => nav('/seeds')}>Native seeds</button></Link></li>
            <li>
            <Link to="products-grid"
            spy={true}
            smooth={true}
            duration={1500}
            style={{textDecoration: 'none'}}>
              <button onClick={() => nav("/garden-tools")}>Garden tools</button></Link>
            </li>
            <li><Link to="products-grid"
            spy={true}
            smooth={true}
            duration={1500}
            style={{textDecoration: 'none'}}>
              <button onClick={() => nav('/flowers')}>Flowers</button></Link>
            </li>
            <li><Link to="products-grid"
            spy={true}
            smooth={true}
            duration={1500}
            style={{textDecoration: 'none'}}>
              <button onClick={() => nav("/grocery")}>Grocery</button></Link>
            </li>
            <li><Link to="products-grid"
            spy={true}
            smooth={true}
            duration={1500}
            style={{textDecoration: 'none'}}>
              <button onClick={() => nav("/snacks")}>Snacks</button></Link>
            </li>
          </ul>
        </div>
        <div className="cart-button">
          <div className="login-or-register">
            <button id="custom-button" onClick={() => nav("login-register")}>
              <h3>Login/Register</h3>
            </button>
          </div>
          <div className="positioning-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png"
              alt=""
            />
            <span className="positioning-container-span">{cartcount}</span>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <SearchBar></SearchBar>
      </div>
    </header>
  );
}

export default Header;
