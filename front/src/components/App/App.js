import Goods from "../../Pages/Goods";
import AdminGoodsList from "../AdminGoodsList/AdminGoodsList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "../../Pages/ProfilePage";
import Admin from "../Admin/Admin";
import RegNewAgent from "../RegNewAgent/RegNewAgent";
import Login from "../Login/Login";
import Header from "./Header/Header"
import SideBar from "./SideBar/SideBar"
import Cart from "../../Pages/Cart";
import AdminApplicationList from "../AdminApplicationList/AdminApplicationList"
import ApplicationInfo from "../ApplicationInfo/ApplicationInfo";
import ApplicationEdit from "../ApplicationEditList/ApplicationEditList";



function App() {

  return (
    <div id="wrapper">
      <Router>
        <div id="main">
          <div className="inner">

            <Header />

            {/* ROUTES CONTENT AREA */}

            <Switch>
              <Route path="/about">{/* <About /> */}</Route>
              <Route path="/admin/goodslist">
                <AdminGoodsList />
              </Route>
              <Route path="/admin/applicationlist">
                <AdminApplicationList />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/cart"><Cart /></Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">{/* <Home /> */}</Route>
              <Route path="/admin/agentReg">
                <RegNewAgent />
              </Route>

              <Route path="/goods">
                <Goods />
              </Route>

              <Route exact path="/admin">
                <Admin />
              </Route>
              <Route exact path="/admin/application/:id">
                <ApplicationInfo />
              </Route>
              <Route path="/admin/application/edit/:id">
                <ApplicationEdit />
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
