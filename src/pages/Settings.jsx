import SettingsTabs from '../components/settings/SettingsTabs';
import StoreSettings from '../components/settings/StoreSettings';
import UserSettings from '../components/settings/UserSettings';
import SystemSettings from '../components/settings/SystemSettings';
import BackupSettings from '../components/settings/BackupSettings';
import AboutSettings from '../components/settings/AboutSettings';
import useSettings from '../hooks/useSettings';

const Settings = () => {
    const {
        activeTab,
        setActiveTab,
        formData,
        handleInputChange,
        handleSave
    } = useSettings();

    return (
        <div className="flex-1 p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">System Settings</h2>
                <p className="text-gray-600">Configure your store preferences and system options</p>
            </div>

            <SettingsTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="bg-white rounded-lg shadow p-6 mt-4">
                {activeTab === 'Store' && (
                    <StoreSettings
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                    />
                )}
                {activeTab === 'User' && (
                    <UserSettings
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                    />
                )}
                {activeTab === 'System' && (
                    <SystemSettings
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                    />
                )}
                {activeTab === 'Backup' && (
                    <BackupSettings
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                    />
                )}
                {activeTab === 'About' && (
                    <AboutSettings
                        formData={formData}
                    />
                )}
            </div>
        </div>
    );
};

export default Settings;