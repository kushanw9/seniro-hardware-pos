import { BarChart3 } from 'lucide-react';

const TopProducts = ({ products }) => {
    return (
        <div className="bg-white p-4 rounded-lg border h-64 overflow-y-auto">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Top Selling Products</h3>
            {products.length === 0 ? (
                <div className="text-center py-4">
                    <div className="text-gray-400 mb-2">
                        <BarChart3 className="w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-sm text-gray-500">No sales data available</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 text-sm truncate">{product.name}</p>
                                <p className="text-xs text-gray-500">{product.sales} units</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-blue-600 text-sm">${product.revenue.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopProducts;