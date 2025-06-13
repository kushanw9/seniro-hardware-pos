import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { POSProvider } from './context/POSContext';
import PointOfSale from './pages/PointOfSale';
import Inventory from './pages/Inventory';
import Customer from './pages/Customer';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import MainLayout from './components/layouts/MainLayout';


function App() {
    return (
        <POSProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/pos" element={<PointOfSale />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/customers" element={<Customer />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/" element={<PointOfSale />} />
                    </Routes>
                </MainLayout>
            </Router>
        </POSProvider>
    );
}

export default App;