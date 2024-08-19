import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../Styles/styles.css'
import Card from '../../components/Student/Card';
import Sidebar from '../../components/Student/Sidebar'; // Import the Sidebar component
import LMSHeader from '../../components/Student/LmsHeader';
import { fetchData } from '../../TestRunData.js/StudentData';


function StudentDashboard() {
  const courseData = fetchData('courses'); // Fetch course data
  const notificationData = fetchData('notificationsPageList'); // Fetch notification data
  const assignmentData = fetchData('assignments'); // Fetch notification data
  const quizData = fetchData('quizzes'); // Fetch notification data


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader notifications={notificationData}/>

        <div className="content">
          <div className='page-title'>
            <p>Dashboard</p>
          </div>

          <div className="grid">

            <Card
              title="Courses"
              data={courseData}
              pageType='Overview'
              // pageLink={`/course/${index + 1}/overview`} // Dynamic link for each course
              />

            <Card
              title='Notifications'
              data={notificationData}
              count={notificationData.length}
              showCount={true}
              seeMore='/Student/Notifications'
              pageLink='/NotificationPage'
            />

            <Card
              title='Upcoming Quizzes'
              data = {quizData}
              pageLink='/QuizzesPage'
              seeMore='/Student/Quizzes'

            />

            <Card
              title='Assignments'
              data = {assignmentData}
              count={assignmentData.length}
              showCount={true}
              pageLink='/AssignmentPage'
              seeMore='/Student/Assignments'

            />

            </div>
          
        </div>
      </div>
      
    </div>
        
  );
}

export default StudentDashboard;
