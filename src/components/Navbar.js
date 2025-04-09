import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.linkContainer}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkContainer: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  dropdown: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    marginRight: '2rem'
  }
};

export default Navbar;