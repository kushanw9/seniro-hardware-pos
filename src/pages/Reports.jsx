import  ReportStats  from '../components/reports/ReportStats';
import  SalesTrendChart  from '../components/reports/SalesTrendChart';
import  TopProducts  from '../components/reports/TopProducts';
import  ReportInfoCards  from '../components/reports/ReportInfoCards';
import  PeriodSelector  from '../components/reports/PeriodSelector';
import  {useReports}  from '../hooks/useReports';

const Reports = () => {
    const {
        selectedPeriod,
        setSelectedPeriod,
        showPeriodDropdown,
        setShowPeriodDropdown,
        periods,
        stats,
        salesData,
        topProducts,
        infoCards
    } = useReports();

    return (

            <div className="flex-1 p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sales Reports</h2>
                    <p className="text-gray-600">Analyze your business performance</p>
                </div>

                {/* Period Selector and Export Button */}
                <div className="flex justify-between items-center mb-6">
                    <PeriodSelector
                        selectedPeriod={selectedPeriod}
                        setSelectedPeriod={setSelectedPeriod}
                        periods={periods}
                        showDropdown={showPeriodDropdown}
                        setShowDropdown={setShowPeriodDropdown}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Export
                    </button>
                </div>

                {/* Stats Cards */}
                <ReportStats stats={stats} />

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <SalesTrendChart data={salesData} />
                    <TopProducts products={topProducts} />
                </div>

                {/* Info Cards */}
                <ReportInfoCards cards={infoCards} />
            </div>

    );
};

export default Reports