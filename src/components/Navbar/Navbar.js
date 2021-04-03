import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'


export default function Navbar({ title, navbarItems, className }) {
  return (
    <div className={`${className}`}>
        <h2 className="navbar-title">{title}</h2>
        {
            navbarItems.map((navbarItem => {
                {console.log('navbar -> ', navbarItem)}
                return (<a class="navbar-item">
                    {navbarItem}
                </a>)
            }))
        }
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  navbarItems: PropTypes.array,
  active: PropTypes.bool
}

Navbar.defaultProps = {
  title: 'Navbar',
  navbarItems: ['home'],
  active: false
}