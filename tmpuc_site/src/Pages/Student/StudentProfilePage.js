import React, { useState} from "react";
import Sidebar from '../../components/Student/Sidebar'; // Import the Sidebar component
import LMSHeader from '../../components/Student/LmsHeader';
import { fetchData } from '../../TestRunData.js/StudentData'
import '../../Styles/Student/StudentProfilePage.css'


const StudentProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const placeholderImage = '/images/Profile-Placeholder.png'; // Path relative to the public folder  
  const [profile, setProfile] = useState({

    
    profilePicture: '',
    saySomething: 'I love TMPUC!',
    firstName: 'Lara',
    otherNames: 'Elizabeth',
    lastName: 'Croft',
    dateOfBirth: '28/08/2002',
    gender: 'Female',
    phoneNumber: "0501234567",
    email: 'lara_é_raider@gmail.com',
    schoolIdNumber: '00000001',
    department: 'Department of Information Technology',
    program: 'Software engineering',
    programType: 'Professional Diploma',
  });

  const [isEditing, setIsEditing] = useState({
    email: false,
    phoneNumber: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const toggleEdit = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleBlur = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleKeyPress = (e, field) => {
    if (e.key === 'Enter') {
      handleBlur(field);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

 
  

  return(
    <div className="app">
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
      <LMSHeader/>
      <div className="content">
        <div className='page-title'>
          <p>My Profile</p>
        </div>

        <div className="profile-picture-div">
          <img className="profile-picture" src={profile.profilePicture || placeholderImage}  alt="Profile" />
          <input  id="fileInput"  type="file" onChange={handleImageUpload} style={{display: 'none'}} />
          <button className="upload-button" onClick={triggerFileInput}>Add/Change Picture</button>
          <h1>{profile.firstName} {profile.otherNames} {profile.lastName}</h1>
        </div>

        <div className="profile-details">
        <p><strong>Full Name:</strong> {profile.firstName} {profile.otherNames} {profile.lastName}</p>
        <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        
        {/* Editable Phone Number Field */}
        <p>
          <strong>Phone Number:</strong>
          {isEditing.phoneNumber ? (
            <input
              type="tel"
              name="phoneNumber"
              value= {profile.phoneNumber}
              onChange={handleInputChange}
              onBlur={() => handleBlur('phoneNumber')}
              onKeyPress={(e) => handleKeyPress(e, 'phoneNumber')}
              className="editable-input"
              autoFocus
            />
          ) : (
            <>
               {` ${profile.phoneNumber}`}
              <button onClick={() => toggleEdit('phoneNumber')} className="edit-button">Change</button>
            </>
          )}
        </p>

        {/* Editable Email Field */}
        <p>
          <strong>Email:</strong>
          {isEditing.email ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              onBlur={() => handleBlur('email')}
              onKeyPress={(e) => handleKeyPress(e, 'email')}
              className="editable-input"
              autoFocus
            />
          ) : (
            <>
              {` ${profile.email}`}
              <button onClick={() => toggleEdit('email')} className="edit-button">Change</button>
            </>
          )}
        </p>


        <p><strong>School ID:</strong> {profile.schoolIdNumber}</p>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>Program:</strong> {profile.program}</p>
        <p><strong>Program Type:</strong> {profile.programType}</p>
        <p><strong>Say Something:</strong> {profile.saySomething}</p>
      </div>


        {/* <div>
          
        </div>
  
        <ItemTable
          data={notificationListData}
        /> */}
  
      </div>


    


    </div>
  </div>
  )
}

export default StudentProfile;