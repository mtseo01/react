import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
