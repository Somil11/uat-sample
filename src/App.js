import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScriptProtectedRoute from './components/ScriptProtectedRoute';
import Navbar from './components/Navbar';
import Entry from './pages/Entry';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={
          <ScriptProtectedRoute>
            <>
              <Navbar />
              <Home />
            </>
          </ScriptProtectedRoute>
        } />
        <Route path="/about" element={
          <ScriptProtectedRoute>
            <>
              <Navbar />
              <About />
            </>
          </ScriptProtectedRoute>
        } />
        <Route path="/services" element={
          <ScriptProtectedRoute>
            <>
              <Navbar />
              <Services />
            </>
          </ScriptProtectedRoute>
        } />
        <Route path="/contact" element={
          <ScriptProtectedRoute>
            <>
              <Navbar />
              <Contact />
            </>
          </ScriptProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
