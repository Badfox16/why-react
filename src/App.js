import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
      <div><header className='head'>      
      <img src={logo} className="App-logo" alt="logo" />
  </header>
  </div>
    <div className="App">
      
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first releasead in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>It's mantained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

    </div>
    </div>
  );
}

export default App;
