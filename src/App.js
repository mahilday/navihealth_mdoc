import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Provider from "./pages/Provider";
import { useContext } from "react";
import { NavContext } from "./contexts/navContext";
import FindAProvider from "./pages/findAProvider";

function App() {
  const { functions, status } = useContext(NavContext);
  return (
    <Router>
      <div className="App">
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <Switch
          onClick={() => functions.closeModal(status.facility.setFacModalOpen)}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/providers/:id" component={Provider} />
          <Route exact path="/providers" component={FindAProvider} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
