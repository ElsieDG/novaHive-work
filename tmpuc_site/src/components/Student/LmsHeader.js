import React, { useState, useEffect, useRef } from 'react';
import NotificationDropdown from "./NotificationDropDown";
import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";
import { fetchData } from "../../TestRunData.js/StudentData";
import '../../Styles/LmsHeader.css'



// const notificationData = fetchData('notificationsPageList'); // Fetch notification data

const LMSHeader = () => {

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
          setIsProfileDropdownOpen(false);
      }
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);


  return (
    <div className="header">
          <div className="header-container">
            <div className='school-logo'>
              <img className='school-logo-img' src='/images/TMPUC_PR__1_-removebg-preview.png' alt="hi" />
            </div>
            <div className="header-actions">
            <div className="profile-div" ref={profileDropdownRef}>
                <i className="fa-solid fa-user-large" onClick={toggleProfileDropdown}></i>
                {isProfileDropdownOpen && (
                    <div className="profile-dropdown">
                        <Link className='profile-dropdown-item' to={'/'}>Log out</Link> <br />
                        <Link className='profile-dropdown-item' to={'/Student/MyProfile'}>Go to Profile</Link>
                    </div>
                )}
            </div>
            <CourseDropdown courses={fetchData('courses')} />
            <NotificationDropdown notifications={fetchData('notifications')} />
        </div>
          </div>
        </div>
  )}

  export default LMSHeader;