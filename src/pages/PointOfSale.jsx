// src/pages/PointOfSale.jsx
import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import QuickSaleGrid from '../components/pos/QuickSale/QuickSaleGrid';
import ProductGrid from '../components/pos/ProductGrid/ProductGrid';
import Cart from '../components/pos/Cart/Cart';

const PointOfSale = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex">
                    <div className="flex-1 p-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Point of Sale</h2>
                            <p className="text-gray-600">Process sales and manage transactions</p>
                        </div>

                        <QuickSaleGrid />
                        <ProductGrid />
                    </div>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default PointOfSale;