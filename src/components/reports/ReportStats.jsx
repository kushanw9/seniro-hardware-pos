const ReportStats = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-3 h-3 ${stat.color} rounded-full`}></div>
                        <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.trend && (
                        <p className={`text-xs ${stat.trendColor} mt-1`}>{stat.trend}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReportStats;