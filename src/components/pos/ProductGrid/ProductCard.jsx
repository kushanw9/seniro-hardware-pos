// src/components/pos/ProductGrid/ProductCard.jsx
import React from 'react';
import { Package } from 'lucide-react';

const ProductCard = ({ product }) => {
    const stockColor = product.stock <= 5 ? 'text-orange-600' : 'text-green-600';
    const stockLabel = product.stock <= 5 ? `${product.stock} in stock` : `${product.stock} in stock`;

    return (
        <div className="bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
            <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                <Package className="w-12 h-12 text-gray-400" />
            </div>
            <div className="p-3">
                <h4 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h4>
                <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
                <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">${product.price}</span>
                    <span className={`text-xs ${stockColor}`}>
            {stockLabel}
          </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;