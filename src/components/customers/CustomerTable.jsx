import { Search } from 'lucide-react';

const CustomerTable = ({ customers, search, setSearch }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                <h2 className="text-xl font-semibold text-gray-900">Customer List</h2>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search customers..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="overflow-x-auto -mx-6 px-6">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full text-sm">
                        <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2 px-3 text-left">Customer</th>
                            <th className="py-2 px-3 text-left">Contact</th>
                            <th className="py-2 px-3 text-left">Type</th>
                            <th className="py-2 px-3 text-left">Address</th>
                            <th className="py-2 px-3 text-left">Status</th>
                            <th className="py-2 px-3 text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map(c => (
                            <tr key={c.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-3">
                                    <div className="font-medium text-gray-900">{c.name}</div>
                                    <div className="text-xs text-gray-500">Member since {c.memberSince}</div>
                                </td>
                                <td className="py-2 px-3 whitespace-pre-line">{c.contact || <span className="text-gray-400">—</span>}</td>
                                <td className="py-2 px-3">
                                    <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">{c.type}</span>
                                </td>
                                <td className="py-2 px-3">{c.address}</td>
                                <td className="py-2 px-3">
                                    <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-600">{c.status}</span>
                                </td>
                                <td className="py-2 px-3 space-x-2">
                                    <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Edit</button>
                                    <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">History</button>
                                </td>
                            </tr>
                        ))}
                        {customers.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center py-6 text-gray-400">
                                    No customers found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerTable;