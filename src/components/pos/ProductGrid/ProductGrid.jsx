// src/components/pos/ProductGrid/ProductGrid.jsx
import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import ProductCard from './ProductCard';
import SearchBar from '../../common/SearchBar';

const ProductGrid = () => {
    const [activeTab, setActiveTab] = useState('All Items');

    const categories = ['All Items', 'Hand Tools', 'Power Tools', 'Electrical', 'Plumbing', 'Hardware'];

    const products = [
        { id: 1, name: 'DeWalt 20V MAX Cordless Drill Kit', sku: 'DCD771C2', price: 149.99, stock: 25 },
        // ... other products
    ];

    return (
        <>
            <SearchBar placeholder="Search products by name, code, or scan barcode..." />

            <CategoryTabs
                categories={categories}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductGrid;