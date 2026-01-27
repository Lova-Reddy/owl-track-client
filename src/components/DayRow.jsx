import { ChevronRight, Trophy, FileText, FileEdit } from 'lucide-react';
import './DayRow.css';

const DayRow = ({ day, onClick, onOpenNotes, onOpenUserNotes }) => {
    const handleNotesClick = (e) => {
        e.stopPropagation();
        if (day.lectureNotesPdf) {
            onOpenNotes(day);
        }
    };

    return (
        <div className="day-row glass-panel" onClick={onClick}>
            <div className="day-date-col">
                <span className="day-full">{day.day}, {day.date}</span>
            </div>

            <div className="day-topic-col">
                <h4 className="topic-title">{day.topic}</h4>
                {day.masteryMode && (
                    <div className="mastery-badge">
                        <span className="mastery-label">Mastery Mode</span>
                        <div className="mastery-status">
                            <Trophy size={14} className="trophy-icon" />
                            <span>Achieved</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="day-stats-col">
                <div className="stat-group box-stat">
                    <span className="stat-label">Notes</span>
                    <div
                        className="file-icon-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenUserNotes(day);
                        }}
                        title="Open My Notes"
                    >
                        <FileEdit size={18} />
                    </div>
                </div>

                <div className="stat-group lecture-group">
                    <span className="stat-label">Lecture Notes</span>
                    {day.lectureNotesPdf ? (
                        <div
                            className="file-icon-btn"
                            onClick={handleNotesClick}
                            title="Open Lecture Notes"
                        >
                            <FileText size={18} />
                        </div>
                    ) : (
                        <span className="stat-val">-</span>
                    )}
                </div>

                <div className="stat-group box-stat">
                    <span className="stat-label">Assignment</span>
                    <span className={`stat-val ${day.assignments.completed === day.assignments.total ? 'perfect-green' : ''}`}>
                        {day.assignments.completed} / {day.assignments.total}
                    </span>
                </div>

                <div className="stat-group box-stat">
                    <span className="stat-label">Additional Problem</span>
                    <span className={`stat-val ${day.additionalProblems.completed === day.additionalProblems.total ? 'perfect-green' : ''}`}>
                        {day.additionalProblems.completed} / {day.additionalProblems.total}
                    </span>
                </div>
            </div>

            <div className="day-action-col">
                <ChevronRight size={20} className="action-icon" />
            </div>
        </div>
    );
};

export default DayRow;
