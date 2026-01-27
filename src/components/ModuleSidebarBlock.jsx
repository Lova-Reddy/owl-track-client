import { Lock, Unlock, ChevronRight } from 'lucide-react';
import './ModuleSidebarBlock.css';

const ModuleSidebarBlock = ({ module, isActive, onClick }) => {
    return (
        <div
            className={`module-sidebar-block ${isActive ? 'active' : ''} ${module.isLocked ? 'locked' : ''}`}
            onClick={() => !module.isLocked && onClick(module)}
        >
            <div className="module-info-top">
                <span className="module-header-title">{module.title}</span>
                {module.weeks && <span className="module-duration">{module.weeks}</span>}
            </div>

            <h3 className="module-subtitle">{module.subtitle}</h3>

            <div className={`module-status-bar ${isActive ? 'active-status' : ''}`}>
                <div className="status-label">
                    {module.isLocked ? "Content" : "Content"}
                </div>

                <div className="status-indicator">
                    {module.isLocked ? (
                        <div className="status-flex">
                            <Lock size={14} />
                            <span>Locked</span>
                        </div>
                    ) : (
                        <div className="status-flex">
                            {/* Active/Unlocked state */}
                        </div>
                    )}

                    {!module.isLocked && (
                        <div className={`arrow-bubble ${isActive ? 'active' : ''}`}>
                            <ChevronRight size={14} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ModuleSidebarBlock;
