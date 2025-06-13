// src/components/pos/Cart/Cart.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CustomerSelector from './CustomerSelector';
import PaymentMethod from './PaymentMethod';
import ActionButtons from './ActionButtons';
import UserProfile from '../UserProfile/UserProfile';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('Walk-in Customer');
    const [paymentMethod, setPaymentMethod] = useState('Cash');

    return (
        <div className="w-80 bg-white shadow-lg flex flex-col">
            <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Current Sale</h3>
                    <button className="text-red-500 text-sm hover:text-red-600">Clear</button>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-8">
                        <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2">No items in cart</p>
                        <p className="text-sm text-gray-400">Add products to start a sale</p>
                    </div>
                ) : (
                    <>
                        <div className="space-y-3 mb-6">
                            {cart.map((item, index) => (
                                <CartItem key={index} item={item} />
                            ))}
                        </div>

                        <CartSummary />
                    </>
                )}

                <CustomerSelector
                    selectedCustomer={selectedCustomer}
                    onSelectCustomer={setSelectedCustomer}
                />

                <PaymentMethod
                    paymentMethod={paymentMethod}
                    onSelectPaymentMethod={setPaymentMethod}
                />

                <ActionButtons />
            </div>

            <UserProfile />
        </div>
    );
};

export default Cart;