import { useState } from 'react';
import Navbar from './Navbar';
import GlobalSidebar from './GlobalSidebar';
import './GlobalLayout.css';

const GlobalLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="global-layout">
            <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
            <GlobalSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="global-content">
                {children}
            </main>
        </div>
    );
};

export default GlobalLayout;
