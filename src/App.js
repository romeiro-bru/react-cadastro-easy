import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}
