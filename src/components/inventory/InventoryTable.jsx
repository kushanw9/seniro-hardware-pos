// src/components/inventory/InventoryTable.jsx
import React, { useState } from 'react';
import { Search, ChevronDown, Edit, Trash2, Package } from 'lucide-react';
import SearchBar from '../common/SearchBar';

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const products = [
        {
            id: 1,
            name: 'DeWalt 20V MAX Cordless Drill Kit',
            description: 'Compact, lightweight design fits into tight areas',
            sku: 'DCD771C2',
            category: 'Power Tools',
            stock: 25,
            price: 149.99,
            status: 'In Stock'
        },
        // ... other products
    ];

    const getCategoryColor = (category) => {
        const colors = {
            'Power Tools': 'bg-red-100 text-red-700 border border-red-200',
            'Electrical': 'bg-blue-100 text-blue-700 border border-blue-200'
        };
        return colors[category] || 'bg-gray-100 text-gray-700 border border-gray-200';
    };

    const getStatusColor = (status) => {
        const colors = {
            'In Stock': 'bg-blue-500 text-white',
            'Low Stock': 'bg-gray-100 text-gray-700 border border-gray-300'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Product Inventory</h2>
                    <div className="flex items-center space-x-4">
                        <SearchBar
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            >
                                <option>All Categories</option>
                                <option>Power Tools</option>
                                <option>Electrical</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        <Package className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                        <div className="text-sm text-gray-500 max-w-md">{product.description}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sku}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-medium rounded ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <div className="flex items-center space-x-4">
                                    <button className="text-blue-600 hover:text-blue-900 font-medium">
                                        <Edit className="inline w-4 h-4 mr-1" /> Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900 font-medium">
                                        <Trash2 className="inline w-4 h-4 mr-1" /> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryTable;