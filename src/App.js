import logo from './logo.svg';
import './App.css';
import './NavBar.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li><a href="./AboutMe.js">About Me</a></li>
        <li><a href="AboutMe.js">Projects</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
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
