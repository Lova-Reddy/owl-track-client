import { Link } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';
import './GlobalSidebar.css';

const GlobalSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <div className={`global-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                    <span className="sidebar-title">Owl Coder</span>
                </div>

                <div className="sidebar-content">
                    <div className="sidebar-menu-item">
                        <div className="sidebar-link">
                            <BookOpen size={20} />
                            <span>Courses</span>
                        </div>
                        <div className="courses-dropdown">
                            <Link to="/" className="dropdown-link" onClick={onClose}>
                                Data Structures & Algorithms
                            </Link>
                            <Link to="#" className="dropdown-link" onClick={onClose}>
                                Full Stack Web Development
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalSidebar;
