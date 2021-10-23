import { Link } from 'react-router-dom';
import { FaHome, FaHeart, FaBitcoin } from 'react-icons/fa';
import { BsCurrencyExchange } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import NavBarIcon from './NavBarIcon';

const NavBar = () => (
  <div className="fixed bottom-0 sm:top-0 sm:left-0 flex sm:flex-col h-16 w-screen sm:h-screen sm:w-16 justify-around items-center xl:justify-start bg-gray-900 shadow-lg ">
    <Link to="/"><NavBarIcon Icon={FaHome} text="Home 💡" /></Link>
    <Link to="/favorite"><NavBarIcon Icon={FaBitcoin} text="Crypto Curenccy 💡" /></Link>
    <Link to="/favorite"><NavBarIcon Icon={FaHeart} text="Favorite 💡" /></Link>
    <Link to="/exchange"><NavBarIcon Icon={BsCurrencyExchange} text="Exchange 💡" /></Link>
    <Link to="/exchange"><NavBarIcon Icon={AiTwotoneSetting} text="Settings 💡" /></Link>
  </div>
);

export default NavBar;
