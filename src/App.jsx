import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader setLoading={setLoading} key="loader" />
        ) : (
          <div className="">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tokenomics" element={<div className="p-8">Tokenomics Content</div>} />
              <Route path="/memes" element={<div className="p-8">Memes Content</div>} />
            </Routes>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
