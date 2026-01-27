import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mockModules } from '../data/mockModules';
import { ArrowLeft, Play, FileText, CheckCircle, Circle } from 'lucide-react';
import './ModuleViewer.css';

const ModuleViewer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [module, setModule] = useState(null);
    const [activeChapter, setActiveChapter] = useState(null);

    useEffect(() => {
        const foundModule = mockModules.find(m => m.id === parseInt(id));
        if (foundModule) {
            setModule(foundModule);
            if (foundModule.chapters.length > 0) {
                setActiveChapter(foundModule.chapters[0]);
            }
        }
    }, [id]);

    if (!module) return <div className="loading">Loading module...</div>;

    return (
        <div className="viewer-container">
            <button className="back-btn" onClick={() => navigate('/')}>
                <ArrowLeft size={18} />
                Back to Dashboard
            </button>

            <div className="viewer-layout">
                {/* Content Area */}
                <div className="content-area glass-panel">
                    {activeChapter ? (
                        <>
                            <div className="video-placeholder">
                                {activeChapter.type === 'video' ? (
                                    <div className="fake-player">
                                        <Play size={64} className="player-icon" />
                                        <span>Playing: {activeChapter.title}</span>
                                    </div>
                                ) : (
                                    <div className="text-content-view">
                                        <FileText size={64} className="text-icon" />
                                        <span>Reading: {activeChapter.title}</span>
                                    </div>
                                )}
                            </div>
                            <div className="chapter-details">
                                <h2>{activeChapter.title}</h2>
                                <p className="chapter-meta">{activeChapter.duration} • {activeChapter.type === 'video' ? 'Video Lesson' : 'Reading Material'}</p>
                                <hr className="divider" />
                                <p className="description-text">
                                    This is the content description for <strong>{activeChapter.title}</strong>.
                                    In a real application, this would contain the transcription, resources, or full text article.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="select-prompt">Select a chapter to begin</div>
                    )}
                </div>

                {/* Sidebar / Syllabus */}
                <div className="syllabus-sidebar glass-panel">
                    <div className="syllabus-header">
                        <h3>Module Content</h3>
                        <div className="progress-mini">
                            <div className="progress-bar-bg small">
                                <div className="progress-bar-fill" style={{ width: `${module.progress}%` }}></div>
                            </div>
                            <span>{module.progress}%</span>
                        </div>
                    </div>

                    <div className="chapter-list">
                        {module.chapters.map((chapter, index) => (
                            <div
                                key={chapter.id}
                                className={`chapter-item ${activeChapter?.id === chapter.id ? 'active' : ''}`}
                                onClick={() => setActiveChapter(chapter)}
                            >
                                <div className="chapter-status">
                                    {chapter.completed ? (
                                        <CheckCircle size={18} className="status-icon completed" />
                                    ) : activeChapter?.id === chapter.id ? (
                                        <div className="status-icon current-dot"></div>
                                    ) : (
                                        <Circle size={18} className="status-icon pending" />
                                    )}
                                </div>
                                <div className="chapter-info">
                                    <span className="chapter-title">{index + 1}. {chapter.title}</span>
                                    <span className="chapter-duration">{chapter.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleViewer;
