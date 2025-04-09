import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedScript, setSelectedScript] = useState('');

  // Move scriptOptions outside component or use useMemo
  const scriptOptions = {
    option1: '',
    option2: 'https://eucdn.whatfix.com/prod/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
    option3: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
    option4: 'https://cdn.jsdelivr.net/npm/chart.js'
  };

  useEffect(() => {
    let scriptElement = null;
    if (selectedScript) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      scriptElement.src = scriptOptions[selectedScript];
      document.head.appendChild(scriptElement);

      return () => {
        if (scriptElement) {
          document.head.removeChild(scriptElement);
        }
      };
    }
  }, [selectedScript, scriptOptions]); // Added scriptOptions to dependency array

  return (
    <nav style={styles.nav}>
      <div style={styles.linkContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
      <select 
        value={selectedScript} 
        onChange={(e) => setSelectedScript(e.target.value)}
        style={styles.dropdown}
      >
        <option value="">Select Script</option>
        <option value="option1">EU-Extension</option>
        <option value="option2">EU-JS-1</option>
        <option value="option3">EU-JS-2</option>
        <option value="option4">US-JS</option>
      </select>
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