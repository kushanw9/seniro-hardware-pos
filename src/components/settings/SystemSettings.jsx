const ToggleSwitch = ({ name, checked, onChange }) => {
    return (
        <div className="relative inline-block w-12 h-6">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div
                className={`block w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    checked ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } })}
            >
                <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        checked ? 'transform translate-x-6' : ''
                    }`}
                />
            </div>
        </div>
    );
};

const SystemSettings = ({ formData, handleInputChange, handleSave }) => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">System Preferences</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-800">Enable Barcode Scanner</h3>
                                <p className="text-sm text-gray-600">Allow barcode scanning for product lookup</p>
                            </div>
                            <ToggleSwitch
                                name="barcodeScanner"
                                checked={formData.barcodeScanner}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Other toggle switches... */}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notifications</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-800">Email Notifications</h3>
                                <p className="text-sm text-gray-600">Receive email alerts for important events</p>
                            </div>
                            <ToggleSwitch
                                name="emailNotifications"
                                checked={formData.emailNotifications}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Other toggle switches... */}
                    </div>
                </div>
            </div>

            <button
                onClick={() => handleSave('System')}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                Save System Settings
            </button>
        </div>
    );
};

export default SystemSettings;