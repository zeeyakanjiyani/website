import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
// import Home from './pages/Home.jsx';
import './components/NavBar.css';



function App() {
  return (
    <div className="App">
      <NavBar/>

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
