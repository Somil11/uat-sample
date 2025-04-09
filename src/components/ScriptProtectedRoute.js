import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScriptProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [isScriptPresent, setIsScriptPresent] = useState(false);

  useEffect(() => {
    const checkScript = () => {
      const scripts = document.getElementsByTagName('script');
      const hasWhatfixScript = Array.from(scripts).some(script => 
        script.src && script.src.includes('whatfix')
      );

      if (!hasWhatfixScript) {
        navigate('/');
      } else {
        setIsScriptPresent(true);
      }
    };

    // Initial check
    checkScript();

    // Add mutation observer to monitor script changes
    const observer = new MutationObserver(checkScript);
    observer.observe(document.head, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [navigate]);

  return isScriptPresent ? children : null;
}

export default ScriptProtectedRoute;