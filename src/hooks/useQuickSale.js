import { useState } from 'react';

export const useQuickSale = () => {
    const [quickSaleItems, setQuickSaleItems] = useState([
        { id: 1, name: 'Screws', price: 12.99 },
        { id: 2, name: 'Wire', price: 2.45, stock: 'Low' },
        { id: 3, name: 'Pipe', price: 8.99 },
        { id: 4, name: 'Nails', price: 15.50 },
        { id: 5, name: 'Bolts', price: 8.25 },
        { id: 6, name: 'Washers', price: 4.99 },
        { id: 7, name: 'Nuts', price: 6.75 },
        { id: 8, name: 'Tape', price: 3.99, stock: 'Low' },
        { id: 9, name: 'Glue', price: 7.50 },
        { id: 10, name: 'Drill Bits', price: 22.99 },
        { id: 11, name: 'Sandpaper', price: 5.25 },
        { id: 12, name: 'Wire Nuts', price: 9.99 }
    ]);

    const [showQuickSaleModal, setShowQuickSaleModal] = useState(false);

    const addQuickSaleItem = (name, price) => {
        const newItem = {
            id: Date.now(),
            name,
            price: parseFloat(price)
        };
        setQuickSaleItems([...quickSaleItems, newItem]);
    };

    const removeQuickSaleItem = (id) => {
        setQuickSaleItems(quickSaleItems.filter(item => item.id !== id));
    };

    return {
        quickSaleItems,
        showQuickSaleModal,
        setShowQuickSaleModal,
        addQuickSaleItem,
        removeQuickSaleItem
    };
};