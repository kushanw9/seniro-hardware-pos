// src/components/common/Header.jsx
import { Package, Search } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white shadow-sm border-b px-4 py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900">HardwarePOS</h1>
                        <p className="text-sm text-gray-500">Retail Management</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Online</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Scan Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;