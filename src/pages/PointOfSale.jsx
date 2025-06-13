import React from 'react';
import { QuickSaleGrid } from '../components/pos/quickSale/QuickSaleGrid';
import { AddQuickSaleModal } from '../components/pos/quickSale/AddQuickSaleModal';
import { CategoryTabs } from '../components/pos/productGrid/CategoryTabs';
import { ProductGrid } from '../components/pos/productGrid/ProductGrid';
import { Cart } from '../components/pos/cart/Cart';
import { useQuickSale } from '../hooks/useQuickSale';
import { useCart } from '../hooks/useCart';
import { usePOS } from '../context/POSContext';
import SearchBar from "../components/common/SearchBar";

const PointOfSale = () => {
    const {
        quickSaleItems,
        showQuickSaleModal,
        setShowQuickSaleModal,
        addQuickSaleItem,
        removeQuickSaleItem
    } = useQuickSale();

    const { cart, addToCart, clearCart } = useCart();

    const {
        activeTab,
        setActiveTab,
        selectedCustomer,
        setSelectedCustomer,
        paymentMethod,
        setPaymentMethod,
        categories,
        products
    } = usePOS();

    return (
        <div className="flex-1 flex min-h-screen">
            {/* Products Section */}
            <div className="flex-1 p-6 bg-gray-50">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Point of Sale</h2>
                    <p className="text-gray-600">Process sales and manage transactions</p>
                </div>

                {/* Quick Sale */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Quick Sale</h3>
                        <button
                            onClick={() => setShowQuickSaleModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                        >
                            + Add Item
                        </button>
                    </div>
                    <QuickSaleGrid
                        quickSaleItems={quickSaleItems}
                        onAddToCart={addToCart}
                        onRemoveItem={removeQuickSaleItem}
                    />
                </div>

                <AddQuickSaleModal
                    show={showQuickSaleModal}
                    onClose={() => setShowQuickSaleModal(false)}
                    onAddItem={addQuickSaleItem}
                />

                <div className="mb-6">
                    <SearchBar/>
                </div>

                <div className="mb-6">
                    <CategoryTabs
                        categories={categories}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>

                <ProductGrid
                    products={products}
                    onAddToCart={addToCart}
                />
            </div>

            {/* Cart Section */}
            <Cart
                cart={cart}
                onClearCart={clearCart}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
            />
        </div>
    );
};

export default PointOfSale;