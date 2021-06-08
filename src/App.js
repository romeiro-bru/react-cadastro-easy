import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/index";
import { UserRegister } from "./pages/UserRegister/index";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userregister" component={UserRegister} />
        </Switch>
      </div>
    </Router>
  );
}
