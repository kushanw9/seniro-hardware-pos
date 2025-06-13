import { Search } from 'lucide-react';

const InventoryTable = ({
                                   products,
                                   categories,
                                   search,
                                   setSearch,
                                   category,
                                   setCategory,
                                   onDelete
                               }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                <h2 className="text-xl font-semibold text-gray-900">Product Inventory</h2>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2"
                    >
                        {categories.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                    <tr className="text-gray-600 border-b">
                        <th className="py-2 px-3 text-left">Product</th>
                        <th className="py-2 px-3 text-left">SKU</th>
                        <th className="py-2 px-3 text-left">Category</th>
                        <th className="py-2 px-3 text-left">Stock</th>
                        <th className="py-2 px-3 text-left">Price</th>
                        <th className="py-2 px-3 text-left">Status</th>
                        <th className="py-2 px-3 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((p) => (
                        <tr key={p.id} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-3">{p.name}</td>
                            <td className="py-2 px-3">{p.sku}</td>
                            <td className="py-2 px-3">
                  <span
                      className={`px-2 py-1 rounded text-xs ${
                          p.category === 'Power Tools'
                              ? 'bg-red-100 text-red-600'
                              : p.category === 'Electrical'
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-600'
                      }`}
                  >
                    {p.category}
                  </span>
                            </td>
                            <td className="py-2 px-3">{p.stock}</td>
                            <td className="py-2 px-3">${p.price.toFixed(2)}</td>
                            <td className="py-2 px-3">
                  <span
                      className={`px-2 py-1 rounded text-xs ${
                          p.status === 'In Stock'
                              ? 'bg-blue-100 text-blue-600'
                              : p.status === 'Low Stock'
                                  ? 'bg-yellow-100 text-yellow-600'
                                  : 'bg-red-100 text-red-600'
                      }`}
                  >
                    {p.status}
                  </span>
                            </td>
                            <td className="py-2 px-3 space-x-2">
                                <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Edit</button>
                                <button
                                    className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                                    onClick={() => onDelete(p.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {products.length === 0 && (
                        <tr>
                            <td colSpan={7} className="text-center py-6 text-gray-400">
                                No products found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryTable;