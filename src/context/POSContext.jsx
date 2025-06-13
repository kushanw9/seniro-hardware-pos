import { createContext, useContext, useState } from 'react';

const POSContext = createContext();

export const POSProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('All Items');
    const [selectedCustomer, setSelectedCustomer] = useState('Walk-in Customer');
    const [paymentMethod, setPaymentMethod] = useState('Cash');

    const categories = ['All Items', 'Hand Tools', 'Power Tools', 'Electrical', 'Plumbing', 'Hardware'];

    const products = [
        { id: 1, name: 'DeWalt 20V MAX Cordless Drill Kit', sku: 'DCD771C2', price: 149.99, stock: 25, stockLabel: '25 in stock' },
        { id: 2, name: 'Milwaukee M18 FUEL Hammer Drill', sku: '2804-20', price: 199.99, stock: 15, stockLabel: '15 in stock' },
        { id: 3, name: '12 AWG THHN Electrical Wire', sku: 'THHN-12-BLK', price: 2.45, stock: 2, stockLabel: '2 in stock', stockColor: 'text-orange-600' },
        { id: 4, name: '1/2 inch PVC Pipe', sku: 'PVC-12-10FT', price: 8.99, stock: 45, stockLabel: '45 in stock', stockColor: 'text-green-600' },
        { id: 5, name: 'Wood Screws Assorted Pack', sku: 'WS-ASST-100', price: 12.99, stock: 30, stockLabel: '30 in stock', stockColor: 'text-green-600' }
    ];

    return (
        <POSContext.Provider value={{
            activeTab,
            setActiveTab,
            selectedCustomer,
            setSelectedCustomer,
            paymentMethod,
            setPaymentMethod,
            categories,
            products
        }}>
            {children}
        </POSContext.Provider>
    );
};

export const usePOS = () => useContext(POSContext);