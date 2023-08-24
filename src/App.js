import './App.css';
import { Header } from './Header';

function App() {
  return (
    <div>

      <Header />

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
