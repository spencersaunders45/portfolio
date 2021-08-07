import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Projects path='projects' />
      </Router>
    </div>
  );
}

export default App;
