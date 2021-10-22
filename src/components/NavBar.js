import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="fixed top-0 w-screen flex justify-evenly shadow-lg">
    <Link to="/">Home</Link>
    <Link to="/favorite">Favorite</Link>
    <Link to="/exchange">Exchange</Link>

  </div>
);

export default NavBar;
