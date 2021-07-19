import React from "react";
import Navbar from "../../Navbar/Navbar";

function SideBar() {
  return (
    <div id="sidebar">
      <div className="inner">
        <header>
          <span className="left">
            <img className="logo_sol" src="images/logo_sol1.png" alt="" />
          </span>
          <h4>Торговая марка «Солёнушка»</h4>
          Система формирования заказов
        </header>
        {/* <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section> */}

        <Navbar />

        {/* <header class="major">
          <h3>Информация для связи</h3>
        </header> */}

        <section>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="/">info@solenushka.ru</a>
            </li>
            <li className="icon solid fa-phone">
              +7 (4012) 640-707
              <br />
              +7 (4012) 640-202
            </li>
            <li className="icon solid fa-home">
              238651, Калининградская область, Полесский район, <br />
              поселок Придорожное, <br />
              переулок Калининградский, дом 3.
            </li>
          </ul>
        </section>

        {/* <footer id="footer">
          <p className="copyright">
            © 2021 Аппетитка и Группа Товарищей.
            <br />
            Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer> */}
      </div>
      <a href="#sidebar" className="toggle">
        Toggle
      </a>
    </div>
  );
}

export default SideBar;
