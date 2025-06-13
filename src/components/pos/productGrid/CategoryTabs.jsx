export const CategoryTabs = ({ categories, activeTab, setActiveTab }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === category
                            ? 'bg-blue-500 text-white'
                            : category === 'Hand Tools'
                                ? 'border border-orange-300 text-orange-600 hover:bg-orange-50'
                                : category === 'Power Tools'
                                    ? 'border border-red-300 text-red-600 hover:bg-red-50'
                                    : category === 'Electrical'
                                        ? 'border border-blue-300 text-blue-600 hover:bg-blue-50'
                                        : category === 'Plumbing'
                                            ? 'border border-green-300 text-green-600 hover:bg-green-50'
                                            : category === 'Hardware'
                                                ? 'border border-purple-300 text-purple-600 hover:bg-purple-50'
                                                : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};