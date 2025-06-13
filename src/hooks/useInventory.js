import { useState } from 'react';

const initialProducts = [
    {
        id: 1,
        name: 'DeWalt 20V MAX Cordless Drill Kit',
        sku: 'DCD771C2',
        category: 'Power Tools',
        stock: 25,
        price: 149.99,
        status: 'In Stock',
    },
    {
        id: 2,
        name: 'Milwaukee M18 FUEL Hammer Drill',
        sku: '2804-20',
        category: 'Power Tools',
        stock: 15,
        price: 199.99,
        status: 'In Stock',
    },
    {
        id: 3,
        name: '12 AWG THHN Electrical Wire',
        sku: 'THHN-12-BLK',
        category: 'Electrical',
        stock: 2,
        price: 2.45,
        status: 'Low Stock',
    },
];

const categories = ['All Categories', 'Power Tools', 'Electrical'];

export const useInventory = () => {
    const [products, setProducts] = useState(initialProducts);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All Categories');
    const [showAddModal, setShowAddModal] = useState(false);

    // Summary calculations
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0).toFixed(2);
    const lowStock = products.filter((p) => p.stock <= 5 && p.stock > 0).length;
    const outOfStock = products.filter((p) => p.stock === 0).length;

    // Filtered products
    const filteredProducts = products.filter(
        (p) =>
            (category === 'All Categories' || p.category === category) &&
            (p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.sku.toLowerCase().includes(search.toLowerCase()))
    );

    const handleDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    return {
        products: filteredProducts,
        categories,
        search,
        setSearch,
        category,
        setCategory,
        showAddModal,
        setShowAddModal,
        totalProducts,
        totalValue,
        lowStock,
        outOfStock,
        handleDelete
    };
};