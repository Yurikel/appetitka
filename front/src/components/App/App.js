import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "../../Pages/ProfilePage";
import Navbar from "../Navbar/Navbar";
import Admin from "../Admin/Admin";
import RegNewAgent from "../RegNewAgent/RegNewAgent";
import Login from "../Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/cart">{/* <CartPage /> */}</Route>
        <Route path="/goods">{/* <GoodsPage /> */}</Route>
        <Route path="/login"><Login /></Route>
        <Route path="/logout">{/* <Home /> */}</Route>
        <Route path="/admin/agentReg">
          <RegNewAgent />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/admin/goodsList">{/* <Home /> */}</Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
