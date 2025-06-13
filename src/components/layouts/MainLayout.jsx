import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="flex">
                <Sidebar />
                <main className="flex-1 flex">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;