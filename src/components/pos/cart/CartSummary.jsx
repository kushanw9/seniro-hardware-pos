export const CartSummary = () => {
    return (
        <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>$149.99</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>Tax (8.5%):</span>
                <span>$12.75</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-blue-600">
                <span>Total:</span>
                <span>$162.74</span>
            </div>
        </div>
    );
};