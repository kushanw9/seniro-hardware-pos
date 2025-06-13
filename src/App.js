// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PointOfSale from './pages/PointOfSale';
import Inventory from './pages/Inventory';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/pos" element={<PointOfSale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/" element={<PointOfSale />} />
        </Routes>
      </Router>
  );
}

export default App;