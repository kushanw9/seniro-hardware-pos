// src/pages/Inventory.jsx
import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import InventoryStats from '../components/inventory/InventoryStats';
import InventoryTable from '../components/inventory/InventoryTable';
import InventoryHeader from '../components/inventory/InventoryHeader';

const Inventory = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar activeTab="Inventory" />
                <div className="flex-1 p-6">
                    <InventoryHeader />
                    <InventoryStats />
                    <InventoryTable />
                </div>
            </div>
        </div>
    );
};

export default Inventory;