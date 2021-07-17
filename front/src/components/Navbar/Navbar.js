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
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {agent ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="#" onClick={handlerLogout}>
                Logout
              </Link>
            </li>
            <li>
              <Link to="/goods">Goods</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <Link to="/about">About</Link>
        </li>
        {admin ? (
          <>
            <li>
              <Link to="/admin">Admin</Link>
            </li>

            <li>
              <Link to="#" onClick={handlerLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
