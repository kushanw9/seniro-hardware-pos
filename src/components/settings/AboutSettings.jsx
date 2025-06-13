const AboutSettings = ({ formData }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">System Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
                    <div className="w-full px-3 py-2 bg-gray-50 rounded-md">
                        <p className="text-gray-900">HardwarePOS</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Build Date</label>
                    <div className="w-full px-3 py-2 bg-gray-50 rounded-md">
                        <p className="text-gray-900">6/14/2025</p>
                    </div>
                </div>
            </div>

            {/* Other system info fields... */}

            <div className="mt-8 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                    <h3 className="font-medium text-gray-800">Check for Updates</h3>
                    <p className="text-sm text-gray-600">Your system is up to date</p>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                    Check Now
                </button>
            </div>
        </div>
    );
};

export default AboutSettings;