import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScriptProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isScriptPresent, setIsScriptPresent] = useState(false);

  useEffect(() => {
    const checkScript = () => {
      const scriptLoaded = localStorage.getItem('scriptLoaded');
      const scriptUrl = localStorage.getItem('scriptUrl');

      if (!scriptLoaded || !scriptUrl) {
        navigate('/');
        return;
      }

      const scripts = document.getElementsByTagName('script');
      const hasWhatfixScript = Array.from(scripts).some(script => 
        script.src && script.src.includes('whatfix')
      );

      if (!hasWhatfixScript) {
        // Reload the script if it's missing but was previously loaded
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = scriptUrl;
        document.head.appendChild(script);
      }

      setIsScriptPresent(true);
    };

    checkScript();
  }, [navigate]);

  return isScriptPresent ? children : null;
}

export default ScriptProtectedRoute;