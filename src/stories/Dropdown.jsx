import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'; 

const Dropdown = ({ isOpen, items }) => {
  if (!isOpen) return null;

  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;

