import React, { useState } from 'react';
import '../../Styles/NotificationDropDown.css';
import { Link } from 'react-router-dom';

const CourseDropdown = ({ courses }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <i class="fa-solid fa-rectangle-list"
              onClick={toggleDropdown}>
            </i>

            {isOpen && (
                <div className="notification-dropdown-content">
                    {courses.map((item, index) => (
                        <div key={index} className="notification-item">
                            <Link
                                to={`/Student/${item.id}/Overview`}  // Navigates to the notifications page
                                className="notification-title-link"
                                onClick={() => toggleDropdown()} // Closes dropdown when a notification is clicked
                            >
                                {item.title}
                            </Link>
                          
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default CourseDropdown;
