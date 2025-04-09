import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScriptProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const scripts = document.getElementsByTagName('script');
    const hasWhatfixScript = Array.from(scripts).some(script => 
      script.src && script.src.includes('whatfix')
    );

    if (!hasWhatfixScript) {
      navigate('/');
    }
  }, [navigate]);

  return children;
}

export default ScriptProtectedRoute;