const CustomerSummary = ({ totalCustomers, retailCustomers, wholesaleCustomers }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center flex-1">
                <span className="text-gray-500 text-sm">Total Customers</span>
                <span className="text-2xl font-bold">{totalCustomers}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center flex-1">
                <span className="text-gray-500 text-sm">Retail Customers</span>
                <span className="text-2xl font-bold">{retailCustomers}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center flex-1">
                <span className="text-gray-500 text-sm">Wholesale Customers</span>
                <span className="text-2xl font-bold">{wholesaleCustomers}</span>
            </div>
        </div>
    );
};

export default CustomerSummary;