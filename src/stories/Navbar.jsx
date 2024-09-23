import PropTypes from 'prop-types';
import './Navbar.css'
import { BsList } from "react-icons/bs";
import React, { useState } from 'react';
import Dropdown from './Dropdown';



const Navbar = ({ items, onClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
  <nav className='navbar kufam'>
    <div>
        <img src="/src/assets/LC-logo.png" alt="My logo" />
    </div>
    <div>
        <ul className='navbar-list' >
      {items.map((item, index) => (
        <li className='navbar-item' key={index} >
          <a href={item.href} onClick={() => onClick(item.name)}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
    </div>
    <div>
    <BsList className='menu-icon' onClick={handleIconClick} />
    <Dropdown isOpen={isDropdownOpen} items={items} />
    </div>
    
  </nav>
) };

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
    onClick: PropTypes.func,
};

export default Navbar;

