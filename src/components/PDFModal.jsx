import { X, Download, FileText } from 'lucide-react';
import './PDFModal.css';

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
    if (!isOpen) return null;

    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <div className="pdf-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
                <div className="pdf-modal-header">
                    <div className="pdf-modal-title">
                        <FileText size={20} className="pdf-icon" />
                        <h3>{title}</h3>
                    </div>

                    <div className="pdf-header-actions">
                        {pdfUrl && (
                            <a
                                href={pdfUrl}
                                download
                                target="_blank"
                                rel="noreferrer"
                                className="download-icon-btn"
                                title="Download PDF"
                                aria-label="Download PDF"
                            >
                                <Download size={20} />
                            </a>
                        )}
                        <button className="close-btn" onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="pdf-modal-body">
                    {pdfUrl ? (
                        <iframe
                            src={pdfUrl}
                            title="PDF Viewer"
                            className="pdf-viewer-frame"
                        />
                    ) : (
                        <div className="no-pdf-message">
                            <p>No PDF available for this lecture.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PDFModal;
