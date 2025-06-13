// hooks/useSettings.js
import { useState } from 'react';

const useSettings = () => {
    const [activeTab, setActiveTab] = useState('Store');
    const [formData, setFormData] = useState({
        // Store data
        storeName: 'Hardware Pro Store',
        phone: '(555) 123-4567',
        address: '123 Main Street, Hardware City, HC 12345',
        email: 'info@hardwarepro.com',
        taxRate: '8.5',
        currency: 'USD - US Dollar',
        timezone: 'Eastern Time',

        // User data
        username: 'admin',
        fullName: 'Sarah Johnson',
        userEmail: 'sarah@hardwarepro.com',
        role: 'Administrator',
        newPassword: '',
        confirmPassword: '',

        // System preferences
        barcodeScanner: true,
        lowStockAlerts: true,
        autoBackup: true,
        receiptPrinting: false,
        emailNotifications: true,
        dailyReports: true,
        lowStockWarnings: true,
        systemUpdates: false,

        // Sync settings
        cloudSync: true,
        offlineMode: true,
        syncFrequency: 'Every Hour'
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = (tab) => {
        // Implement save logic here
        console.log(`Saving ${tab} settings`, formData);
    };

    return {
        activeTab,
        setActiveTab,
        formData,
        handleInputChange,
        handleSave
    };
};

export default useSettings;