import React, { useState } from 'react';
import '../../Styles/styles.css'
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import LMSHeader from '../../components/Student/LmsHeader';
// import NotificationDropdown from '../../components/NotificationDropDown';
import ItemTable from '../../components/Student/ItemTable';
import { fetchData } from '../../TestRunData.js/StudentData';


function AdminResourcePage() {
// const courseData = fetchData('courses'); // Fetch course data
// const notificationData = fetchData('notifications'); // Fetch notification data
const resourceData = fetchData('resources'); // Fetch notification data


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
    <LMSHeader/>
    <div className="content">
      <div className='page-title'>
        <p>Admin Resources</p>
      </div>

      <ItemTable
        data={resourceData}
      />

    </div>
  </div>
</div>
)
}

export default AdminResourcePage;