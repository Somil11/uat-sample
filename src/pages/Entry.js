import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Entry() {
  const [selectedScript, setSelectedScript] = useState('');
  const navigate = useNavigate();

  const scriptOptions = useMemo(() => ({
    option1: '',
    option2: 'https://eucdn.whatfix.com/prod/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
    option3: 'https://eucdn.whatfix.com/prod/a6b8aa9c-6196-4580-b859-cedb3075b240/initiator/initiator.nocache.js',
    option4: 'https://cdn.whatfix.com/prod/ebb8b6c9-c4b3-4838-b118-a39c7edc7e88/initiator/initiator.nocache.js'
  }), []);

  const handleScriptSelect = (e) => {
    const selected = e.target.value;
    if (selected) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = scriptOptions[selected];
      document.head.appendChild(script);
      setSelectedScript(selected);
      navigate('/home');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome</h1>
      <p style={styles.subtitle}>Please select a script to continue</p>
      <select 
        value={selectedScript} 
        onChange={handleScriptSelect}
        style={styles.dropdown}
      >
        <option value="">Select Script</option>
        <option value="option1">Extension</option>
        <option value="option2">EU-JS-1</option>
        <option value="option3">EU-JS-2</option>
        <option value="option4">US-JS</option>
      </select>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f5f5'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  subtitle: {
    marginBottom: '2rem',
    color: '#666'
  },
  dropdown: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
    cursor: 'pointer'
  }
};

export default Entry;