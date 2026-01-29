import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopicDetailsHeader from '../components/TopicDetailsHeader';
import ProblemList from '../components/ProblemList';
import { mockModules } from '../data/mockModules';
import { mockProblems } from '../data/mockProblems';
import './TopicDetailsPage.css';

const TopicDetailsPage = () => {
    const { dayId } = useParams();
    const [activeTab, setActiveTab] = useState('assignment'); // 'assignment' | 'additional'
    const [dayData, setDayData] = useState(null);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        // Find day data from modules
        let foundDay = null;
        for (const mod of mockModules) {
            const day = mod.days.find(d => d.id === parseInt(dayId));
            if (day) {
                foundDay = day;
                break;
            }
        }
        setDayData(foundDay);
    }, [dayId]);

    useEffect(() => {
        if (dayId && mockProblems[dayId]) {
            setProblems(mockProblems[dayId][activeTab] || []);
        } else {
            setProblems([]);
        }
    }, [dayId, activeTab]);

    // Calculate counts
    const dayProblems = mockProblems[dayId] || { assignment: [], additional: [] };

    const assignmentTotal = dayProblems.assignment?.length || 0;
    const assignmentSolved = dayProblems.assignment?.filter(p => p.status === 'Solved').length || 0;

    const additionalTotal = dayProblems.additional?.length || 0;
    const additionalSolved = dayProblems.additional?.filter(p => p.status === 'Solved').length || 0;

    const handleRefreshStatus = (problemId) => {
        console.log('Refreshing status for problem:', problemId);
        // Implement status refresh logic here
    };

    return (
        <div className="topic-details-layout">
            <div className="topic-main-area">
                <TopicDetailsHeader
                    day={dayData}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    assignmentCount={`${assignmentSolved}/${assignmentTotal}`}
                    additionalCount={`${additionalSolved}/${additionalTotal}`}
                />

                <div className="topic-content-scroll">
                    <ProblemList problems={problems} onRefresh={handleRefreshStatus} />
                </div>
            </div>
        </div>
    );
};

export default TopicDetailsPage;
