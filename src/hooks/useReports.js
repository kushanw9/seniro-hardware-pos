import { useState } from 'react';

const initialData = {
    salesData: [
        { day: 'Mon', sales: 1150 },
        { day: 'Tue', sales: 1850 },
        { day: 'Wed', sales: 750 },
        { day: 'Thu', sales: 1400 },
        { day: 'Fri', sales: 2200 },
        { day: 'Sat', sales: 1750 },
        { day: 'Sun', sales: 950 }
    ],
    topProducts: [
        { name: 'DeWalt 20V Drill Kit', sales: 45, revenue: 6749.55 },
        { name: 'Milwaukee Hammer Drill', sales: 32, revenue: 6399.68 },
        { name: 'Wood Screws Pack', sales: 89, revenue: 1156.11 },
        { name: 'PVC Pipe 1/2"', sales: 67, revenue: 602.33 },
        { name: 'THHN Wire 12 AWG', sales: 156, revenue: 382.20 }
    ],
    periods: ['Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month']
};

export const useReports = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Today');
    const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

    const stats = [
        { title: 'Daily Revenue', value: '$0.00', color: 'bg-green-400', trend: '+12.5% vs yesterday', trendColor: 'text-green-600' },
        { title: 'Transactions', value: '0', color: 'bg-blue-400', trend: '+8.2% vs yesterday', trendColor: 'text-green-600' },
        { title: 'Avg. Order Value', value: '$0.00', color: 'bg-purple-400', trend: '+3.8% vs yesterday', trendColor: 'text-green-600' },
        { title: 'Top Category', value: 'Tools', color: 'bg-yellow-400', trend: '45% of sales', trendColor: 'text-gray-600' }
    ];

    const infoCards = [
        {
            title: 'Payment Methods',
            items: [
                { label: 'Cash', value: '65%' },
                { label: 'Card', value: '30%' },
                { label: 'Mobile', value: '5%' }
            ]
        },
        {
            title: 'Customer Types',
            items: [
                { label: 'Retail', value: '80%' },
                { label: 'Wholesale', value: '20%' }
            ]
        },
        {
            title: 'Peak Hours',
            items: [
                { label: '9:00 - 11:00 AM', value: 'High' },
                { label: '2:00 - 4:00 PM', value: 'Peak' },
                { label: '6:00 - 8:00 PM', value: 'Medium' }
            ]
        }
    ];

    return {
        selectedPeriod,
        setSelectedPeriod,
        showPeriodDropdown,
        setShowPeriodDropdown,
        stats,
        infoCards,
        ...initialData
    };
};