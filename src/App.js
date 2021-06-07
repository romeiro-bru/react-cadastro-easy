import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/index";
import { UserRegister } from "./pages/UserRegister/index";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/userregister">
            <UserRegister />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
