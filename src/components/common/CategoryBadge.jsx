// src/components/common/CategoryBadge.jsx
const CategoryBadge = ({ category }) => {
    const categoryColors = {
        'Power Tools': 'bg-red-100 text-red-700 border border-red-200',
        'Electrical': 'bg-blue-100 text-blue-700 border border-blue-200',
        'Plumbing': 'bg-green-100 text-green-700 border border-green-200'
    };

    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-700'}`}>
      {category}
    </span>
    );
};

export default CategoryBadge;