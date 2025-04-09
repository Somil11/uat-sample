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
        <Route element={
          <ScriptProtectedRoute>
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          </ScriptProtectedRoute>
        }>
          <Route index element={<Navigate to="/home" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
