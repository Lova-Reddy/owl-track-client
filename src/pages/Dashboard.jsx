import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockCourses';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleCourseClick = (courseId) => {
        // For now, just navigate to the modules page, eventually could be separate pages per course
        navigate(`/`);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-hero mobile-hero">
                <div className="hero-content">
                    <h1>Welcome back, Learner!</h1>
                    <p>You have {mockCourses.length} courses in progress. Keep up the momentum.</p>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">{mockCourses.length}</span>
                        <span className="stat-label">Total Courses</span>
                    </div>
                </div>
            </div>

            <h3 className="section-title">Your Courses</h3>

            <div className="modules-grid">
                {mockCourses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onClick={() => handleCourseClick(course.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
