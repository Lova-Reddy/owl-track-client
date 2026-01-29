import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModuleSidebarBlock from '../components/ModuleSidebarBlock';
import DayRow from '../components/DayRow';
import ModuleTestRow from '../components/ModuleTestRow';
import PDFModal from '../components/PDFModal';
import UserNotesModal from '../components/UserNotesModal';

import { mockModules } from '../data/mockModules';
import './ModulesPage.css';

const ModulesPage = () => {
    const navigate = useNavigate();
    const [activeModuleId, setActiveModuleId] = useState(2);
    const [activeModule, setActiveModule] = useState(mockModules[1]);
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [expandedDayId, setExpandedDayId] = useState(null);

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

    const [notesLoading, setNotesLoading] = useState(false);

    const handleOpenUserNotes = async (day) => {
        setCurrentNoteDay(day);
        setNotesModalOpen(true);

        // Simulate fetching notes from backend
        setNotesLoading(true);
        try {
            console.log(`Fetching notes for Day ID: ${day.id}...`);
            await new Promise(resolve => setTimeout(resolve, 600)); // Simulate delay

            // In a real app, we would fetch content here and update state
            // const content = await fetchNotes(day.id);
            // setNotesData(prev => ({ ...prev, [day.id]: content }));

            console.log('Notes fetched successfully.');
        } catch (err) {
            console.error("Failed to load notes", err);
        } finally {
            setNotesLoading(false);
        }
    };

    const handleSaveNotes = async (content) => {
        if (currentNoteDay) {
            const previousContent = notesData[currentNoteDay.id] || '';

            // Only save if content has changed
            if (content !== previousContent) {
                // Update local state
                setNotesData(prev => ({
                    ...prev,
                    [currentNoteDay.id]: content
                }));

                // Call Dummy Backend API
                try {
                    console.log(`Saving notes for Day ID: ${currentNoteDay.id}...`);

                    // Simulate API network request
                    await new Promise(resolve => setTimeout(resolve, 800));

                    /* Real implementation would be:
                    const response = await fetch('/api/save-notes', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            dayId: currentNoteDay.id, 
                            content: content 
                        })
                    });
                    if (!response.ok) throw new Error('Save failed');
                    */

                    console.log('Notes saved successfully to backend.');
                } catch (error) {
                    console.error('Error saving notes:', error);
                    // Handle rollback if necessary
                }
            }
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
                        <span className="module-top-label">MODULE - {activeModule.id}</span>
                        <h2 className="module-main-title">{activeModule.subtitle}</h2>
                    </div>

                    <div className="header-actions">

                    </div>
                </div>

                <div className="days-list section-divider">
                    {activeModule.days && activeModule.days.length > 0 ? (
                        activeModule.days.map(day => (
                            <DayRow
                                key={day.id}
                                day={day}
                                isExpanded={expandedDayId === day.id}
                                onClick={() => setExpandedDayId(expandedDayId === day.id ? null : day.id)}
                                onOpenNotes={handleOpenNotes}
                                onOpenUserNotes={handleOpenUserNotes}
                            />
                        ))
                    ) : (
                        <div className="empty-state">
                            <p>{activeModule.isLocked ? "This module is locked." : "No content available yet."}</p>
                        </div>
                    )}

                    {/* Module Test Row */}
                    {activeModule.moduleTest && (
                        <ModuleTestRow test={activeModule.moduleTest} />
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
                isLoading={notesLoading}
            />
        </div>
    );
};

export default ModulesPage;
