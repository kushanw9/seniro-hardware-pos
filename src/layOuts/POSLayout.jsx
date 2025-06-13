import React from 'react';
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const POSLayOut = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="flex">
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default POSLayOut;