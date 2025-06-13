import ToggleSwitch from "../common/ToggleSwitch";

const BackupSettings = ({ formData, handleInputChange, handleSave }) => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Backup</h2>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h3 className="font-medium text-blue-900 mb-2">Last Backup</h3>
                        <p className="text-blue-700">6/14/2025 at 3:16:27 AM</p>
                    </div>

                    <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors mb-6">
                        Create Backup Now
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sync Settings</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-800">Cloud Sync</h3>
                                <p className="text-sm text-gray-600">Sync data with cloud storage</p>
                            </div>
                            <ToggleSwitch
                                name="cloudSync"
                                checked={formData.cloudSync}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Other sync settings... */}
                    </div>
                </div>
            </div>

            <button
                onClick={() => handleSave('Backup')}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                Save Backup Settings
            </button>
        </div>
    );
};

export default BackupSettings;