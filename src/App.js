import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import { Form } from "./components/Form/Form";
import { User } from "./components/User/User";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/userregister" component={User} />
        </Switch>
      </Router>
    </div>
  );
}
