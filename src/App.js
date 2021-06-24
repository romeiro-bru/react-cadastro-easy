import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import { Home } from "./pages/Home/index";
import { UserRegister } from "./pages/UserRegister/index";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userregister" component={UserRegister} />
        </Switch>
      </Router>
    </div>
  );
}
