import { useState, useEffect } from 'react';
import TopicDetailsHeader from './TopicDetailsHeader';
import ProblemList from './ProblemList';
import { mockProblems } from '../data/mockProblems';
import './TopicDetails.css';

const TopicDetails = ({ day }) => {
    const [activeTab, setActiveTab] = useState('assignment'); // 'assignment' | 'additional'
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        if (day && day.id && mockProblems[day.id]) {
            setProblems(mockProblems[day.id][activeTab] || []);
        } else {
            setProblems([]);
        }
    }, [day, activeTab]);

    // Calculate counts
    const dayProblems = (day && mockProblems[day.id]) || { assignment: [], additional: [] };

    const assignmentTotal = dayProblems.assignment?.length || 0;
    const assignmentSolved = dayProblems.assignment?.filter(p => p.status === 'Solved').length || 0;

    const additionalTotal = dayProblems.additional?.length || 0;
    const additionalSolved = dayProblems.additional?.filter(p => p.status === 'Solved').length || 0;

    const handleRefreshStatus = (problemId) => {
        console.log('Refreshing status for problem:', problemId);
        // Implement status refresh logic here
    };

    return (
        <div className="topic-details-inline">
            <TopicDetailsHeader
                day={day}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                assignmentCount={`${assignmentSolved}/${assignmentTotal}`}
                additionalCount={`${additionalSolved}/${additionalTotal}`}
                compact={true}
            />

            <div className="topic-content-inline">
                <ProblemList problems={problems} onRefresh={handleRefreshStatus} />
            </div>
        </div>
    );
};

export default TopicDetails;
