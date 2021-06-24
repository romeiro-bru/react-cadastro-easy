import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import { Home } from "./pages/Home/index";
import { User } from "./components/User/User";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userregister" component={User} />
        </Switch>
      </Router>
    </div>
  );
}
