import { useState } from 'react';

const initialCustomers = [
    {
        id: 1,
        name: 'Walk-in Customer',
        contact: '',
        type: 'Retail',
        address: 'No address',
        status: 'Active',
        memberSince: '2025',
    },
    {
        id: 2,
        name: 'ABC Construction',
        contact: 'orders@abcconstruction.com\n+1-555-0123',
        type: 'Retail',
        address: '123 Builder Lane, Construction City, ST 12345',
        status: 'Active',
        memberSince: '2025',
    },
    {
        id: 3,
        name: 'Home Improvement Pro',
        contact: 'purchasing@homeimprovementpro.com\n+1-555-0456',
        type: 'Retail',
        address: '456 Contractor Ave, Tool Town, ST 67890',
        status: 'Active',
        memberSince: '2025',
    },
];

export const useCustomers = () => {
    const [customers, setCustomers] = useState(initialCustomers);
    const [search, setSearch] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    // Summary calculations
    const totalCustomers = customers.length;
    const retailCustomers = customers.filter(c => c.type === 'Retail').length;
    const wholesaleCustomers = customers.filter(c => c.type === 'Wholesale').length;

    // Filtered customers
    const filteredCustomers = customers.filter(
        c =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.contact.toLowerCase().includes(search.toLowerCase())
    );

    return {
        customers: filteredCustomers,
        search,
        setSearch,
        showAddModal,
        setShowAddModal,
        totalCustomers,
        retailCustomers,
        wholesaleCustomers
    };
};