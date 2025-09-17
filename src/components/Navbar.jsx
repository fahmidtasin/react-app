import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li><Link to="/"><img src={reactLogo} className="logo react" alt="React logo" /></Link></li>
        <li><Link to="/"><img src={viteLogo} className="logo" alt="Vite logo" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <ul className="nav-right">
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
