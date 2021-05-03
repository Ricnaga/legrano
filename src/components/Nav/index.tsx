import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

export function Nav() {
  return (
    <>
      <NavBar>

        <ul>
          <li><Link to="/">Home</Link></li>
          |
          <li><Link to="/menu">Cardápio</Link></li>
        </ul>

      </NavBar>
    </>
  );
}
