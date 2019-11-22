import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to='/'>React Tamagotchi</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
