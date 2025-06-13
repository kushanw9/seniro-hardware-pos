// src/components/inventory/InventoryStats.jsx
import React from 'react';
import { Package, DollarSign, AlertTriangle, XCircle } from 'lucide-react';

const InventoryStats = () => {
    const stats = [
        { title: 'Total Products', value: '5', icon: Package, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
        { title: 'Total Value', value: '$7,548.75', icon: DollarSign, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
        { title: 'Low Stock', value: '1', icon: AlertTriangle, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
        { title: 'Out of Stock', value: '0', icon: XCircle, bgColor: 'bg-red-100', iconColor: 'text-red-600' }
    ];

    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                        <div className={`p-2 rounded-full ${stat.bgColor}`}>
                            <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-gray-600">{stat.title}</p>
                            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InventoryStats;