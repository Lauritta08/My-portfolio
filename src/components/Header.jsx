import React from 'react';
import Navbar from '../stories/Navbar';

const items = [
  { name: "About Me", href: "/" },
  { name: "My Projects", href: "/projects" },
  { name: "Contact Me", href: "/contact" },
];

const handleItemClick = (itemName) => {
  
};

const Header = () => (
  <div>
    <Navbar items={items} onClick={handleItemClick} />
  </div>
);


export default Header