import "./styles.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
