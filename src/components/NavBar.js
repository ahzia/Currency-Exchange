import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="flex justify-evenly">
    <Link to="/">Home</Link>
    <Link to="/favorite">Favorite</Link>
    <Link to="/exchange">Exchange</Link>
  </div>
);
export default NavBar;
