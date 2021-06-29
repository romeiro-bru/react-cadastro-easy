import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import { Form } from "./components/Form/Form";
import { User } from "./components/User/User";
import { Header } from "./components/Header/Header";
import { Fragment } from "react";

const MainPage = () => (
  <Fragment>
    <Header />
    <Form />
  </Fragment>
);

const UserPage = () => (
  <Fragment>
    <Header />
    <User />
  </Fragment>
);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/userregister" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}
