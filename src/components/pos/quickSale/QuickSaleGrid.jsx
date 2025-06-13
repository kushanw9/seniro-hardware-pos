import { QuickSaleItem } from './QuickSaleItem';

export const QuickSaleGrid = ({ quickSaleItems, onAddToCart, onRemoveItem }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {quickSaleItems.map((item, index) => (
                <QuickSaleItem
                    key={item.id || index}
                    item={item}
                    onAddToCart={onAddToCart}
                    onRemoveItem={onRemoveItem}
                />
            ))}
        </div>
    );
};