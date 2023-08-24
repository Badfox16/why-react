import logo from './logo.svg';

export function Header() {
  return (
    <header className='head'>
      <nav className='nav'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
