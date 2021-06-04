import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/home";
import { UserRegister } from "./pages/UserRegister/userRegister";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/userRegister">
            <UserRegister />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
