import { useNavigate } from 'react-router-dom';
import ModuleCard from '../components/ModuleCard';
import { mockModules } from '../data/mockModules';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleModuleClick = (moduleId) => {
        navigate(`/module/${moduleId}`);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-hero glass-panel">
                <div className="hero-content">
                    <h1>Welcome back, Learner!</h1>
                    <p>You have 2 modules in progress. Keep up the momentum.</p>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">4</span>
                        <span className="stat-label">Total Modules</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">12h</span>
                        <span className="stat-label">Learning Time</span>
                    </div>
                </div>
            </div>

            <h3 className="section-title">Your Modules</h3>

            <div className="modules-grid">
                {mockModules.map((module) => (
                    <ModuleCard
                        key={module.id}
                        module={module}
                        onClick={() => handleModuleClick(module.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
