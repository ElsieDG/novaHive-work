import React, { useState } from 'react';
import '../../Styles/Admin-Teacher/AdminCard.css'
import { Link } from 'react-router-dom';

const AdminCard = ({cardCount, cardTitle, image }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Determine the items to display

  return (
    <div className='admin-card'>
      <div className="admin-card-header">
        <h2>{cardCount}</h2>
        <p>{cardTitle}</p>
      </div>

      <div className='admin-card-image-div'>
        <img className='admin-card-image' src={image} alt="pic" />
      </div>
    </div>

  );
};

export default AdminCard;
