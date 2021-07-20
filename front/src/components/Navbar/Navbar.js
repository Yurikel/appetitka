import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserAC } from "../../utils/redux/actionCreators";

export default function Navbar() {
  const admin = document.cookie.includes('admin')
  const agent = document.cookie.includes('user')
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const preResult = await fetch('http://localhost:4000/agent/getUserInfo', {
        credentials: 'include',
      })
      const result = await preResult.json()
      dispatch(getCurrentUserAC(result))
    })()
  })
  
  const handlerLogout = () => {
    fetch('http://localhost:4000/logout')
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "admin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.location.href = "/";
  };

  return (
    <nav id="menu">
      <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        {agent || admin ? null : (
          <>
          <li>
            <Link to="/login">Вход в систему</Link>
          </li>
          <li>
          <Link to="/registration">Регистрация</Link>
        </li>
        </>
        )}
        {agent && !admin ? (
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
