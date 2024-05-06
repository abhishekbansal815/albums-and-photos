import React from 'react';
import logo from '../logo.svg'; // Import your logo image

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'magenta', height: '50px' }}>
      <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} /> {/* Adjust width as needed */}
      <h1 style={{color: 'purple', marginLeft:'500px'}}>Image Library</h1> {/* Margin set to 0 to remove default margin */}
    </header>
  );
};

export default Header;
