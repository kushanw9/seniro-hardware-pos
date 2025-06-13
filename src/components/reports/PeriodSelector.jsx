import { ChevronDown } from 'lucide-react';

const PeriodSelector = ({
                                   selectedPeriod,
                                   setSelectedPeriod,
                                   periods,
                                   showDropdown,
                                   setShowDropdown
                               }) => {
    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
                <span className="text-sm text-gray-700">{selectedPeriod}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {showDropdown && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-32">
                    {periods.map((period) => (
                        <button
                            key={period}
                            onClick={() => {
                                setSelectedPeriod(period);
                                setShowDropdown(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                            {period}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PeriodSelector;