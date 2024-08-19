import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../TestRunData.js/StudentData';
import Sidebar from '../../components/Student/Sidebar';
import LMSHeader from '../../components/Student/LmsHeader';
import ItemTable from '../../components/Student/ItemTable';
import '../../Styles/Student/OverviewPage.css'

const Overview = () => {
    const { courseId } = useParams(); // Extract courseId from the URL
    const [overviewData, setOverviewData] = useState([]);
    const [courseTitle, setCourseTitle] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const courseData = fetchData('courses').find(course => course.id === courseId);
        if (courseData) {
            setCourseTitle(courseData.title); // Set the course title
            const overviewItem = courseData.subitems.find(item => item.link === '/overview');
            if (overviewItem) {
                setOverviewData(overviewItem.overviewItems || []);
            }
            const notificationsItem = courseData.subitems.find(item => item.link === '/notifications');
            if (notificationsItem) {
                setNotifications(notificationsItem.notifications || []);
            }
            const assignmentsItem = courseData.subitems.find(item => item.link === '/assignments');
            if (assignmentsItem) {
                setAssignments(assignmentsItem.assignments || []);
            }
            const quizzesItem = courseData.subitems.find(item => item.link === '/quizzes');
            if (quizzesItem) {
                setQuizzes(quizzesItem.quizzes || []);
            }
        }
    }, [courseId]);

    if (!overviewData.length) {
        return <div>No Overview Data Available</div>; // Basic error handling
    }

    return (
        <div className='app'>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
                <LMSHeader />
                <div className="content">
                    <div className='page-title'>
                        <p>Overview</p>
                        <p style={{ color: '#000', fontSize: '30px' }}>{courseTitle}</p>
                    </div>

                    {overviewData.map(item => (
                        <div key={item.id} className='overview-grid'>
                            <div className='overview-text-content'>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>

                            <div className='overview-div'>
                                <h2>Notifications</h2>
                                <ItemTable data={notifications} />
                            </div>

                            <div className='overview-div'>
                                <h2>Quizzes</h2>
                                <ItemTable data={quizzes} />
                            </div>

                            <div className='overview-div'>
                                <h2>Assignments</h2>
                                <ItemTable data={assignments} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
