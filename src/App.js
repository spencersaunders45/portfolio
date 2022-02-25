import './App.css';
import Home from './views/Home/Home';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
      </Router>
    </div>
  );
}

export default App;
