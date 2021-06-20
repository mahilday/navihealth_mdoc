import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <switch>
          <Route exact path="/" component={Home} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
