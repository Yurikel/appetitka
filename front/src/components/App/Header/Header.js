import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import { initAgentsAC, initApplicationsAC, requestGoodsAC } from "../../../utils/redux/actionCreators";
import CartStatus from "../CartStatus/CartStatus";


function Header() {
  const adminState = useSelector(state => state.adminReducer)
  const location = useLocation()
  const adminCookie = document.cookie.includes("admin")
  const dispatch = useDispatch();
  useEffect(() => {
    if(adminCookie){
      console.log("something");
      fetch('http://localhost:4000/admin/applications')
      .then(response => response.json())
      .then(applications => dispatch(initApplicationsAC(applications.applications)))
      fetch('http://localhost:4000/admin/agents')
        .then(response => response.json())
        .then(agents => dispatch(initAgentsAC(agents.agents)))
        fetch('http://localhost:4000/admin/goodslist')
        .then(response => response.json())
        .then(goods => dispatch(requestGoodsAC(goods.goods)))
    }
  }, [dispatch])
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
