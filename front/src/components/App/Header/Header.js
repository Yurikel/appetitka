import React from "react";
import { useLocation } from 'react-router-dom'
import CartStatus from "../CartStatus/CartStatus";


function Header() {

  const location = useLocation()

  return (
    <header id="header">
      
      <strong>
        {location.pathname === '/profile' && "Профиль"}
        {location.pathname === '/goods' && "Каталог товаров"}
        {location.pathname === '/cart' && "Корзина"}
        {location.pathname === '/about' && "О компании"}
      </strong>

      {location.pathname !== '/cart' && <CartStatus />}

      {/* <ul className="icons">
        <li>
          <a href="/" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-snapchat-ghost">
            <span className="label">Snapchat</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon brands fa-medium-m">
            <span className="label">Medium</span>
          </a>
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
