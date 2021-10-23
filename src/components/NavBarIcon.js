/* eslint-disable react/prop-types */
const NavBarIcon = ({ Icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    <Icon />
    <span className="sidebar-tooltip group-hover:scale-100 hidden xl:inline">
      {text}
    </span>
  </div>
);

export default NavBarIcon;
