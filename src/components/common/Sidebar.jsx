import { ShoppingCart, Package, Users, BarChart3, Settings } from 'lucide-react';
import UserProfile from "../pos/userProfile/UserProfile";

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-sm h-screen">
            <div className="p-4">
                <nav className="space-y-2">
                    <a href="/" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Point of Sale</span>
                    </a>
                    <a href="/inventory" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Package className="w-5 h-5" />
                        <span>Inventory</span>
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5" />
                        <span>Customers</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <BarChart3 className="w-5 h-5" />
                        <span>Reports</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
            <UserProfile/>
        </div>
    );
};
export default Sidebar;