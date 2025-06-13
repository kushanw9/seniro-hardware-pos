import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const SalesTrendChart = ({ data }) => {
    return (
        <div className="bg-white p-4 rounded-lg border h-64">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Sales Trend</h3>
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            domain={[0, 'dataMax + 200']}
                        />
                        <Bar
                            dataKey="sales"
                            fill="#3B82F6"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesTrendChart