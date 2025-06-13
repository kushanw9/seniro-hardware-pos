export const ActionButtons = () => {
    return (
        <div className="space-y-3">
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Complete Sale
            </button>
            <div className="grid grid-cols-2 gap-2">
                <button className="border border-gray-300 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Hold
                </button>
                <button className="bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Discount
                </button>
            </div>
        </div>
    );
};