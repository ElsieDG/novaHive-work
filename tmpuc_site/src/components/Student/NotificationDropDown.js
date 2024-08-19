import React, { useState } from 'react';
import '../../Styles/NotificationDropDown.css';
import { Link } from 'react-router-dom';

const NotificationDropdown = ({ notifications }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // const toggleAccordion = (index) => {
    //     setActiveIndex(activeIndex === index ? null : index);
    // };

    return (
        <>
            <i 
                className="fa-solid fa-bell" 
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="notification-dropdown-content">
                    {notifications.map((item, index) => (
                        <div key={index} className="notification-item">
                            <Link
                                to={'/Student/Notifications'}  // Navigates to the notifications page
                                className="notification-title-link"
                                onClick={() => toggleDropdown()} // Closes dropdown when a notification is clicked
                            >
                                {item.title}
                            </Link>
                            {/* <button
                                className={`notification-accordion ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </button> */}
                            {/* <div className={`notification-panel ${activeIndex === index ? 'show' : ''}`}>
                                <ul className='notification-panel-items'>
                                    {item.subitems && item.subitems.map((subitem, subIndex) => (
                                        <li key={subIndex} className="notification-subitem">
                                            <Link to={subitem.link}>{subitem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default NotificationDropdown;
