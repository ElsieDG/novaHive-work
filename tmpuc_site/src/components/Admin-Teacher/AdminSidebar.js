// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Sidebar.css'; // Ensure this CSS file is imported

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
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
            <Link to="/Admin/Dashboard" className="nav-link">
              <i className="material-icons"><i className="fa-brands fa-microsoft"></i></i>
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Course-Manager" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-file-lines"></i></span>

              {isSidebarOpen && <span>Courses</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Student-Manager" className="nav-link">
            <i className="material-icons"><i className="fa-sharp-duotone fa-solid fa-folder-open"></i></i>
            {isSidebarOpen && <span>Students</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Lecturer-Manager" className="nav-link">
            <i className="material-icons"><i className="fa-sharp-duotone fa-solid fa-folder-open"></i></i>
            {isSidebarOpen && <span>Lecturers</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Notifications" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-bell"></i></span>
              {isSidebarOpen && <span>Notifications</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Resources" className="nav-link">
              <i className="material-icons"><i className="fa-sharp-duotone fa-solid fa-folder-open"></i></i>

              {isSidebarOpen && <span>Resources</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Admin/Academics" className="nav-link">
              <span className="material-icons"><i className="fa-solid fa-list-check"></i></span>
              {isSidebarOpen && <span>Academics</span>}
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AdminSidebar;
