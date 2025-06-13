import { NavLink } from 'react-router-dom'; // Replace `Link` with `NavLink`
import { ShoppingCart, Package, Users, BarChart3, Settings } from 'lucide-react';
import UserProfile from "../pos/userProfile/UserProfile";

const Sidebar = () => {
    // Active link base classes (shared by all links)
    const baseClasses = "flex items-center space-x-3 px-3 py-2 rounded-lg";

    return (
        <div className="w-64 bg-white shadow-sm h-screen">
            <div className="p-4">
                <nav className="space-y-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${baseClasses} ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Point of Sale</span>
                    </NavLink>
                    <NavLink
                        to="/inventory"
                        className={({ isActive }) =>
                            `${baseClasses} ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <Package className="w-5 h-5" />
                        <span>Inventory</span>
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </NavLink>
                    <NavLink
                        to="/customers"
                        className={({ isActive }) =>
                            `${baseClasses} ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <Users className="w-5 h-5" />
                        <span>Customers</span>
                    </NavLink>
                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            `${baseClasses} ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <BarChart3 className="w-5 h-5" />
                        <span>Reports</span>
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `${baseClasses} ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`
                        }
                    >
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </NavLink>
                </nav>
            </div>
            <UserProfile/>
        </div>
    );
};
export default Sidebar;