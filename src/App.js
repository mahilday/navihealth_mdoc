import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Provider from "./pages/Provider";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/provider" component={Provider} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
