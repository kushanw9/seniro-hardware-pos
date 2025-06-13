import CustomerSummary from '../components/customers/CustomerSummary';
import CustomerTable  from '../components/customers/CustomerTable';
import  AddCustomerModal from '../components/customers/AddCustomerModal';
import { useCustomers } from '../hooks/useCustomers';

const Customer = () => {
    const {
        customers,
        search,
        setSearch,
        showAddModal,
        setShowAddModal,
        totalCustomers,
        retailCustomers,
        wholesaleCustomers
    } = useCustomers();

    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Customer Management</h2>
                <p className="text-gray-600">Manage customer information and purchase history</p>
            </div>

            <CustomerSummary
                totalCustomers={totalCustomers}
                retailCustomers={retailCustomers}
                wholesaleCustomers={wholesaleCustomers}
            />

            <CustomerTable
                customers={customers}
                search={search}
                setSearch={setSearch}
            />

            <AddCustomerModal
                show={showAddModal}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
};

export default Customer;