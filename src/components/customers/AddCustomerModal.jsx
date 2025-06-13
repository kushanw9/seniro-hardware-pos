const AddCustomerModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Customer</h3>
                <p className="text-gray-600 mb-4">Customer form would go here...</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AddCustomerModal;