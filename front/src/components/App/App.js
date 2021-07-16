import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ProfilePage from '../../Pages/ProfilePage';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/cart">
          {/* <CartPage /> */}
        </Route>
        <Route path="/goods">
          {/* <GoodsPage /> */}
        </Route>
        <Route path="/login">
          {/* <LoginForm /> */}
        </Route>
        <Route path="/logout">
          {/* <Home /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
