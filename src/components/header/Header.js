import React from "react";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import "../header/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvoder";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="headerBox">
      <Link to="/" className="headerBox__Links">
        <div className="headerBox__logo">
          <h2>OCIO</h2>
        </div>
      </Link>

      <div className="headerBox__options">
        <Link to="/" className="headerBox__Links">
          <p>Home</p>
        </Link>
        <p>Contact</p>
        <p>About</p>
        <Link to="/login" className="headerBox__Links">
          <p> SignIn</p>
        </Link>
      </div>
      <Link to="/checkout" className="headerBox__Links">
        <div className="headerBox__basket">
          <span className="headerBox__basket__icon">
            <ShoppingCartOutlined fontSize="large" />
          </span>
          <span className="headerBox__basket__counter">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
