import React from "react";
import Navbar from "../../Navbar/Navbar";

function SideBar() {

  return (
    <div id="sidebar" className="">
      <div className="inner">
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <Navbar />

        <section>
          <header className="major">
            <h2>Оставайтесь на связи!</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="/">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        <footer id="footer">
          <p className="copyright">
            © 2021 Аппетитка и Группа Товарищей.
            <br />
            Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
      <a href="#sidebar" className="toggle">
        Toggle
      </a>
    </div>
  );
}

export default SideBar;
