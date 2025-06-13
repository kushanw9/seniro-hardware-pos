export const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                    onClick={() => setPaymentMethod('Cash')}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'Cash'
                            ? 'bg-blue-500 text-white border border-blue-500'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    Cash
                </button>
                <button
                    onClick={() => setPaymentMethod('Card')}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'Card'
                            ? 'bg-blue-500 text-white border border-blue-500'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    Card
                </button>
                <button
                    onClick={() => setPaymentMethod('Mobile')}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'Mobile'
                            ? 'bg-blue-500 text-white border border-blue-500'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    Mobile
                </button>
                <button
                    onClick={() => setPaymentMethod('Other')}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                        paymentMethod === 'Other'
                            ? 'bg-blue-500 text-white border border-blue-500'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    Other
                </button>
            </div>
        </div>
    );
};