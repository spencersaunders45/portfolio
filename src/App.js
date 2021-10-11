import './App.css';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <Skills path='/skills' />
        <Projects path='projects' />
      </Router>
    </div>
  );
}

export default App;
