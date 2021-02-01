import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeStyle={{ color: '#dc143c' }}>
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={s.link}
      activeStyle={{ color: '#dc143c' }}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
