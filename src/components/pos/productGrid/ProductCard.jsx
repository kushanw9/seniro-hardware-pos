import { Package } from 'lucide-react';

export const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div
            className="bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onAddToCart(product)}
        >
            <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                <Package className="w-12 h-12 text-gray-400" />
            </div>
            <div className="p-3">
                <h4 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h4>
                <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
                <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">${product.price}</span>
                    <span className={`text-xs ${product.stockColor || 'text-gray-600'}`}>
            {product.stockLabel}
          </span>
                </div>
            </div>
        </div>
    );
};