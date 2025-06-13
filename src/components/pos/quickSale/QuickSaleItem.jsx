export const QuickSaleItem = ({ item, onAddToCart, onRemoveItem }) => {
    return (
        <div
            className="bg-white rounded-lg border p-3 hover:shadow-md transition-shadow cursor-pointer relative group"
            onClick={() => onAddToCart(item)}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(item.id);
                }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            >
                ×
            </button>
            <div className="text-center">
                <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">{item.name}</h4>
                <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-semibold text-blue-600">${item.price}</span>
                    {item.stock && (
                        <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded">
              {item.stock}
            </span>
                    )}
                </div>
            </div>
        </div>
    );
};