// src/components/pos/QuickSale/QuickSaleGrid.jsx
import React, { useState } from 'react';
import QuickSaleItem from './QuickSaleItem';
import AddQuickSaleModal from './AddQuickSaleModal';
import { ShoppingCart } from 'lucide-react';

const QuickSaleGrid = () => {
    const [showQuickSaleModal, setShowQuickSaleModal] = useState(false);
    const [quickSaleItems, setQuickSaleItems] = useState([
        { id: 1, name: 'Screws', price: 12.99 },
        { id: 2, name: 'Wire', price: 2.45, stock: 'Low' },
        // ... other items
    ]);

    const addQuickSaleItem = (name, price) => {
        const newItem = {
            id: Date.now(),
            name,
            price: parseFloat(price)
        };
        setQuickSaleItems([...quickSaleItems, newItem]);
    };

    const removeQuickSaleItem = (id) => {
        setQuickSaleItems(quickSaleItems.filter(item => item.id !== id));
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Quick Sale</h3>
                <button
                    onClick={() => setShowQuickSaleModal(true)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                >
                    + Add Item
                </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {quickSaleItems.map((item) => (
                    <QuickSaleItem
                        key={item.id}
                        item={item}
                        onRemove={removeQuickSaleItem}
                    />
                ))}
            </div>

            {showQuickSaleModal && (
                <AddQuickSaleModal
                    onClose={() => setShowQuickSaleModal(false)}
                    onAddItem={addQuickSaleItem}
                />
            )}
        </div>
    );
};

export default QuickSaleGrid;