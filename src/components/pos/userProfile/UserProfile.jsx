const UserProfile = () => {
    return (
        <div className="border-t bg-white p-4">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm">SJ</span>
                </div>
                <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Manager</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;