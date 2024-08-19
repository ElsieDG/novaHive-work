// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Sidebar.css'; // Ensure this CSS file is imported

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={isSidebarOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>
      <ul className="sidebar-nav">
        <div className="sidebar-icons-div">
          <li className="nav-item">
            <Link to="/Student/Dashboard" className="nav-link">
              <i className="material-icons"><i className="fa-brands fa-microsoft"></i></i>
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Student/Resources" className="nav-link">
              <i className="material-icons"><i className="fa-sharp-duotone fa-solid fa-folder-open"></i></i>
              {isSidebarOpen && <span>Resources</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Student/Assignments" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-file-lines"></i></span>
              {isSidebarOpen && <span>Assignments</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Student/Notifications" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-bell"></i></span>
              {isSidebarOpen && <span>Notifications</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Student/MyProfile" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-user-large"></i></span>
              {isSidebarOpen && <span>Profile</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Student/Quizzes" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-list-check"></i></span>
              {isSidebarOpen && <span>Quizzes</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Dashboard" className="nav-link">
              <i className="material-icons"><i className="fa-sharp-duotone fa-solid fa-folder-open"></i></i>
              {isSidebarOpen && <span>Gradebook</span>}
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
