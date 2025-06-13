// src/components/common/StatusBadge.jsx
const StatusBadge = ({ status }) => {
    const statusColors = {
        'In Stock': 'bg-blue-500 text-white',
        'Low Stock': 'bg-yellow-100 text-yellow-800 border border-yellow-300',
        'Out of Stock': 'bg-red-100 text-red-800 border border-red-300'
    };

    return (
        <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
    );
};

export default StatusBadge;