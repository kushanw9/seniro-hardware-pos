import  InventorySummary from '../components/inventory/InventorySummary';
import InventoryTable  from '../components/inventory/InventoryTable';
import  AddInventoryModal  from '../components/inventory/AddInventoryModal';
import { useInventory } from '../hooks/useInventory';

const Inventory = () => {
    const {
        products,
        categories,
        search,
        setSearch,
        category,
        setCategory,
        showAddModal,
        setShowAddModal,
        totalProducts,
        totalValue,
        lowStock,
        outOfStock,
        handleDelete
    } = useInventory();

    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Inventory Management</h2>
                <p className="text-gray-600">View and manage your product inventory</p>
            </div>

            <InventorySummary
                totalProducts={totalProducts}
                totalValue={totalValue}
                lowStock={lowStock}
                outOfStock={outOfStock}
            />

            <InventoryTable
                products={products}
                categories={categories}
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                onDelete={handleDelete}
            />

            <AddInventoryModal
                show={showAddModal}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
};

export default Inventory;