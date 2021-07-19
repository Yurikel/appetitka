import Goods from "../../Pages/Goods";
import AdminGoodsList from "../AdminGoodsList/AdminGoodsList";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProfilePage from "../../Pages/ProfilePage";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Cart from "../../Pages/Cart";
import Registration from "../Registration/Registration";

function App() {
  const admin = document.cookie.includes("admin");
  const agent = document.cookie.includes("user");

  return (
    <div id="wrapper">
      <Router>
        <div id="main">
          <div className="inner">
            <Header />

            {/* ROUTES CONTENT AREA */}

            <Switch>
              <Route path="/about">{/* <About /> */}</Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/admin/goodslist">
                {admin ? <AdminGoodsList /> : <Redirect to="/" />}
              </Route>

              <Route path="/profile">
                {agent ? <ProfilePage /> : <Redirect to="/" />}
              </Route>
              <Route path="/cart">
                {agent ? <Cart /> : <Redirect to="/" />}
              </Route>
              <Route path="/login">
                {agent || admin ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route path="/logout">{/* <Home /> */}</Route>

              <Route path="/goods">
                {agent ? <Goods /> : <Redirect to="/" />}
              </Route>

              <Route path="/admin">
                {admin ? <Admin /> : <Redirect to="/" />}
              </Route>

              <Route path="/">{/* <Home /> */}</Route>
            </Switch>

            {/* END ROUTES CONTENT AREA */}
          </div>
        </div>

        <SideBar />
      </Router>
    </div>
  );
}

export default App;
