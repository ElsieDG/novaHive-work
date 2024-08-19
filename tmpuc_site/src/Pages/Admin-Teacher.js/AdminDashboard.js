import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../Styles/styles.css'
import '../../Styles/Admin-Teacher/AdminCard.css'
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import LMSHeader from '../../components/Student/LmsHeader';
import { fetchData } from '../../TestRunData.js/StudentData';
import AdminCard from '../../components/Admin-Teacher/AdminCard';
import ItemTable from '../../components/Student/ItemTable';


function AdminDashboard() {
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
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader notifications={notificationData}/>

        <div className="content">
          <div className='page-title'>
            <p>Admin Dashboard</p>
          </div>

          <div className="admin-dashboard-grid">
            <AdminCard
              cardTitle="Short Certificate Courses"
              cardCount='11'
              image='/images/book.png'
             />
              <AdminCard
              cardTitle="Professional Diploma Courses"
              cardCount='4'
              image='/images/books.png'
             />

            <AdminCard
              cardTitle="Students"
              cardCount='57'
              image='/images/graduate2.png'
             />

             <AdminCard
              cardTitle="Teachers"
              cardCount='5'
              image='/images/teachers.png'
             />

             <AdminCard
              cardTitle="Pending Admissions"
              cardCount='12'
              image='/images/pending.png'
             />

             <AdminCard
              cardTitle="Notifications"
              cardCount='7'
              image='/images/notifications.png'
             />
            </div>

            <div>
              <h2 style={{marginBottom: '20px'}}>Notifications</h2>
              <ItemTable data={notificationData}/>
            </div>
          
        </div>
      </div>
      
    </div>
        
  );
}

export default AdminDashboard;
