export const CustomerSelector = ({ selectedCustomer, setSelectedCustomer }) => {
    return (
        <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">Customer</h4>
            <select
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <option>Walk-in Customer</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
            </select>
        </div>
    );
};