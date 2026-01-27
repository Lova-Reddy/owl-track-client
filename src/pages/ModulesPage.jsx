import { useState, useEffect } from 'react';
import { LayoutDashboard, Box } from 'lucide-react';
import ModuleSidebarBlock from '../components/ModuleSidebarBlock';
import DayRow from '../components/DayRow';
import PDFModal from '../components/PDFModal';
import UserNotesModal from '../components/UserNotesModal';
import ThemeToggle from '../components/ThemeToggle';
import { mockModules } from '../data/mockModules';
import './ModulesPage.css';

const ModulesPage = () => {
    const [activeModuleId, setActiveModuleId] = useState(2);
    const [activeModule, setActiveModule] = useState(mockModules[1]);
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);

    // User Notes State
    const [notesModalOpen, setNotesModalOpen] = useState(false);
    const [currentNoteDay, setCurrentNoteDay] = useState(null);
    const [notesData, setNotesData] = useState({}); // { dayId: htmlContent }

    useEffect(() => {
        const found = mockModules.find(m => m.id === activeModuleId);
        if (found) setActiveModule(found);
    }, [activeModuleId]);

    const handleOpenNotes = (day) => {
        if (day.lectureNotesPdf) {
            setSelectedPdf({
                url: day.lectureNotesPdf,
                title: `${day.topic} - Lecture Notes`
            });
            setPdfModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setPdfModalOpen(false);
        setSelectedPdf(null);
    };

    const handleOpenUserNotes = (day) => {
        setCurrentNoteDay(day);
        setNotesModalOpen(true);
    };

    const handleSaveNotes = (content) => {
        if (currentNoteDay) {
            setNotesData(prev => ({
                ...prev,
                [currentNoteDay.id]: content
            }));
        }
    };

    return (
        <div className="modules-page-container">
            {/* Left Sidebar */}
            <div className="modules-sidebar-list">
                {mockModules.map(module => (
                    <ModuleSidebarBlock
                        key={module.id}
                        module={module}
                        isActive={activeModuleId === module.id}
                        onClick={(m) => setActiveModuleId(m.id)}
                    />
                ))}
            </div>

            {/* Right Content */}
            <div className="modules-content-area">
                <div className="content-header-row">
                    <div className="header-titles">
                        <span className="module-top-label">MODULE - {activeModule.id} <span className="weeks-tag">{activeModule.weeks}</span></span>
                        <h2 className="module-main-title">{activeModule.subtitle}</h2>
                    </div>

                    <div className="header-actions">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="days-list section-divider">
                    {activeModule.days && activeModule.days.length > 0 ? (
                        activeModule.days.map(day => (
                            <DayRow
                                key={day.id}
                                day={day}
                                onClick={() => { }}
                                onOpenNotes={handleOpenNotes}
                                onOpenUserNotes={handleOpenUserNotes}
                            />
                        ))
                    ) : (
                        <div className="empty-state">
                            <p>{activeModule.isLocked ? "This module is locked." : "No content available yet."}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* PDF Modal */}
            <PDFModal
                isOpen={pdfModalOpen}
                onClose={handleCloseModal}
                pdfUrl={selectedPdf?.url}
                title={selectedPdf?.title}
            />

            {/* User Notes Modal */}
            <UserNotesModal
                isOpen={notesModalOpen}
                onClose={() => setNotesModalOpen(false)}
                title={currentNoteDay ? `Notes: ${currentNoteDay.topic}` : 'My Notes'}
                initialText={currentNoteDay ? notesData[currentNoteDay.id] : ''}
                onSave={handleSaveNotes}
            />
        </div>
    );
};

export default ModulesPage;
