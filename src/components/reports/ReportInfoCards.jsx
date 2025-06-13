const ReportInfoCards = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                    <h3 className="text-md font-semibold text-gray-900 mb-3">{card.title}</h3>
                    <div className="space-y-2">
                        {card.items.map((item, i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                                <span className="text-gray-700">{item.label}</span>
                                <span className="font-semibold text-gray-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReportInfoCards;