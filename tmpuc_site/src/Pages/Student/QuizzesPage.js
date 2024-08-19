import React, { useState } from 'react';
import '../../Styles/styles.css'
import Sidebar from '../../components/Student/Sidebar'; // Import the Sidebar component
import LMSHeader from '../../components/Student/LmsHeader';
// import NotificationDropdown from '../../components/NotificationDropDown';
import ItemTable from '../../components/Student/ItemTable';
import { fetchData } from '../../TestRunData.js/StudentData';


function QuizPage() {
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
    <LMSHeader/>
    <div className="content">
      <div className='page-title'>
        <p>Quizzes</p>
      </div>

      <ItemTable
        data={quizData}
      />

    </div>
  </div>
</div>
)
}

export default QuizPage;