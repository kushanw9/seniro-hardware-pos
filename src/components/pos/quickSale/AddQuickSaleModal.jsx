export const AddQuickSaleModal = ({ show, onClose, onAddItem }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Quick Sale Item</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const name = formData.get('name');
                    const price = formData.get('price');
                    if (name && price) {
                        onAddItem(name, price);
                        onClose();
                        e.target.reset();
                    }
                }}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter item name..."
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            min="0"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0.00"
                        />
                    </div>
                    <div className="flex space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};