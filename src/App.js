import logo from './logo.svg';
import './App.css';
import './components/NavBar.css';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
// import Projects from './pages/Projects.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Zeeya
        </a>
      </header>
    </div>
    
  );
}

export default App;
