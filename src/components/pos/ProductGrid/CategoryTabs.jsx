// src/components/pos/ProductGrid/CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ categories, activeTab, onTabChange }) => {
    const getTabClass = (category) => {
        const base = 'px-4 py-2 rounded-lg font-medium transition-colors';
        if (activeTab === category) return `${base} bg-blue-500 text-white`;

        switch(category) {
            case 'Hand Tools': return `${base} border border-orange-300 text-orange-600 hover:bg-orange-50`;
            case 'Power Tools': return `${base} border border-red-300 text-red-600 hover:bg-red-50`;
            case 'Electrical': return `${base} border border-blue-300 text-blue-600 hover:bg-blue-50`;
            case 'Plumbing': return `${base} border border-green-300 text-green-600 hover:bg-green-50`;
            case 'Hardware': return `${base} border border-purple-300 text-purple-600 hover:bg-purple-50`;
            default: return `${base} border border-gray-300 text-gray-600 hover:bg-gray-50`;
        }
    };

    return (
        <div className="mb-6">
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onTabChange(category)}
                        className={getTabClass(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;