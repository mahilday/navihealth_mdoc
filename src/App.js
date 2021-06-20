import './App.css';
import Nav from './components/nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-50">
      <Nav />
      </div>
      <Home />
    </div>
  );
}

export default App;
