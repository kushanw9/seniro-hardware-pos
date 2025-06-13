import { ShoppingCart } from 'lucide-react';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { CustomerSelector } from './CustomerSelector';
import { PaymentMethod } from './PaymentMethod';
import { ActionButtons } from './ActionButtons';

export const Cart = ({
                         cart,
                         onClearCart,
                         selectedCustomer,
                         setSelectedCustomer,
                         paymentMethod,
                         setPaymentMethod
                     }) => {
    return (
        <div className="w-96 bg-white shadow-lg flex flex-col border-l border-gray-200">
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Current Sale</h3>
                    <button
                        onClick={onClearCart}
                        className="text-red-500 text-sm hover:text-red-600 font-medium"
                    >
                        Clear
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2 text-lg">No items in cart</p>
                        <p className="text-sm text-gray-400">Add products to start a sale</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Cart Items */}
                        <div className="space-y-4 max-h-64 overflow-y-auto">
                            {cart.map((item, index) => (
                                <CartItem key={index} item={item} />
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="border-t border-gray-200 pt-4">
                            <CartSummary />
                        </div>

                        {/* Customer Section */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-700">Customer</h4>
                            <CustomerSelector
                                selectedCustomer={selectedCustomer}
                                setSelectedCustomer={setSelectedCustomer}
                            />
                        </div>

                        {/* Payment Method Section */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-700">Payment Method</h4>
                            <PaymentMethod
                                paymentMethod={paymentMethod}
                                setPaymentMethod={setPaymentMethod}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 border-t border-gray-200">
                            <ActionButtons />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};