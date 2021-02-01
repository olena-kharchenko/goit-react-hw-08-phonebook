import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeStyle={{ color: '#dc143c' }}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeStyle={{ color: '#dc143c' }}
      >
        Sign in
      </NavLink>
    </div>
  );
}
