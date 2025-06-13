const InventorySummary = ({ totalProducts, totalValue, lowStock, outOfStock }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
                <span className="text-gray-500 text-sm">Total Products</span>
                <span className="text-2xl font-bold">{totalProducts}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
                <span className="text-gray-500 text-sm">Total Value</span>
                <span className="text-2xl font-bold">${totalValue}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
                <span className="text-gray-500 text-sm">Low Stock</span>
                <span className="text-2xl font-bold">{lowStock}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
                <span className="text-gray-500 text-sm">Out of Stock</span>
                <span className="text-2xl font-bold">{outOfStock}</span>
            </div>
        </div>
    );
};

export default InventorySummary;