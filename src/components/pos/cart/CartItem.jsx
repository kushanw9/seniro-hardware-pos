export const CartItem = ({ item }) => {
    return (
        <div className="border-b pb-3">
            <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">SKU: {item.sku || 'N/A'}</p>
                </div>
                <p className="font-semibold text-blue-600">${item.price}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        -
                    </button>
                    <span className="text-sm">1</span>
                    <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};