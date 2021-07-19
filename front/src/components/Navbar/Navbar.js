import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const admin = localStorage.getItem("admin");
  const agent = localStorage.getItem("itn");
  const handlerLogout = () => {
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    localStorage.clear();
    document.location.href = "/";
  };

  return (
    <nav id="menu">
      <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        {agent || admin ? null : (
          <li>
            <Link to="/login">Вход в систему</Link>
          </li>
        )}
        {agent ? (
          <>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
            <li>
              <Link to="/goods">Каталог товаров</Link>
            </li>
            <li>
              <Link to="/cart">Корзина</Link>
            </li>
            <li>
              <Link to="#" onClick={handlerLogout}>
                Выход из системы
              </Link>
            </li>
          </>
        ) : null}

        {/* <li><Link to="/about">About</Link></li> */}
        {admin ? (
          <>
            <li>
              <Link to="/admin">Админ</Link>
            </li>

            <li>
              <Link to="#" onClick={handlerLogout}>
                Выход из системы
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
