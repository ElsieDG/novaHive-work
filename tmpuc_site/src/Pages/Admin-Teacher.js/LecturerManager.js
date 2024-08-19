import React, { useState } from 'react';
import '../../Styles/styles.css';
// import '../../Styles/Admin-Teacher/LecturerManager.css'; // Update CSS file if necessary
import LabeledInput from '../../components/FormInputs'; // Ensure this component supports lecturer data
import LMSHeader from '../../components/Student/LmsHeader';
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import lecturersData from '../../TestRunData.js/Lecturers'; // Update path as needed

function LecturerManager() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [lecturers, setLecturers] = useState(lecturersData);
  const [activeTab, setActiveTab] = useState(0);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [newLecturer, setNewLecturer] = useState({
    name: '',
    department: '',
    coursesTaught: []
  });
  const [editLecturer, setEditLecturer] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSort = (field) => {
    const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(direction);
  };

  const sortedLecturers = [...lecturers].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'coursesTaught') {
      // Convert the comma-separated string into an array of numbers
      setNewLecturer({
        ...newLecturer,
        [name]: value.split(',').map((course) => course.trim()).filter((course) => !isNaN(course)).map(Number)
      });
    } else {
      setNewLecturer({ ...newLecturer, [name]: value });
    }
  };
  

  const handleAddLecturer = () => {
    const { name, department, coursesTaught } = newLecturer;
  
    // Check if any field is empty
    if (!name || !department) {
      setErrorMessage('Name and Department are required.');
      return;
    }
  
    setErrorMessage(''); // Clear the error message
  
    const newId = lecturers.length + 1;
    const updatedLecturers = [...lecturers, { ...newLecturer, id: newId }];
    setLecturers(updatedLecturers);
    
    // Clear newLecturer state after adding
    setNewLecturer({
      name: '',
      department: '',
      coursesTaught: [] // Reset to empty array
    });
  
    // Alert the user and switch to the View Lecturers tab
    alert('Lecturer has been added.');
    setActiveTab(0);
  };
  

  const handleEditLecturer = (lecturer) => {
    setEditLecturer(lecturer);
    setActiveTab(2); // Switch to the Edit tab
  };

  const handleSaveLecturer = () => {
    const updatedLecturers = lecturers.map((lecturer) =>
      lecturer.id === editLecturer.id ? editLecturer : lecturer
    );
    setLecturers(updatedLecturers);
    setEditLecturer(null);
  
    // Alert the user and switch to the View Lecturers tab
    alert('Lecturer changes have been saved.');
    setActiveTab(0);
  };
  

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'coursesTaught') {
      // Convert the comma-separated string into an array of numbers
      setEditLecturer({
        ...editLecturer,
        [name]: value.split(',').map((course) => course.trim()).filter((course) => !isNaN(course)).map(Number)
      });
    } else {
      setEditLecturer({ ...editLecturer, [name]: value });
    }
  };
  

  const handleDeleteLecturer = (lecturerId) => {
    const updatedLecturers = lecturers.filter(lecturer => lecturer.id !== lecturerId);
    setLecturers(updatedLecturers);
    setEditLecturer(null);
  };

  return (
    <div className="app">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader />
        <div className="content">
          <div className='page-title'>
            <p>Manage Lecturers</p>
          </div>

          <div className="tab">
            <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>View Lecturers</button>
            <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Add Lecturer</button>
            <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Edit Lecturer</button>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Lecturer List</h3>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th onClick={() => handleSort('name')}>
                    Lecturer Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('department')}>
                    Department {sortField === 'department' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('coursesTaught')}>
                    Courses Taught {sortField === 'coursesTaught' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedLecturers.map((lecturer) => (
                  <tr key={lecturer.id}>
                    <td>{lecturer.name}</td>
                    <td>{lecturer.department}</td>
                    <td>{lecturer.coursesTaught.join(', ')}</td>
                    <td>
                      <button onClick={() => handleEditLecturer(lecturer)}>Edit</button>
                      <button onClick={() => handleDeleteLecturer(lecturer.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Add New Lecturer</h3>
            <form>
              <div className="input-container">
                <label className="input-label" htmlFor="name">Lecturer Name</label>
                <input 
                  id="name"
                  name="name" 
                  value={newLecturer.name} 
                  placeholder="Lecturer Name" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="department">Department</label>
                <input 
                  id="department"
                  name="department" 
                  value={newLecturer.department} 
                  placeholder="Department" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="coursesTaught">Courses Taught (comma-separated IDs)</label>
                <input 
                  id="coursesTaught"
                  name="coursesTaught" 
                  value={newLecturer.coursesTaught.join(', ')} 
                  placeholder="Courses Taught" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <button type="button" onClick={handleAddLecturer}>Add Lecturer</button>
              
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Edit Lecturer</h3>
            {editLecturer && (
             <div>
             <div className="input-container">
               <label className="input-label" htmlFor="edit-name">Lecturer Name</label>
               <input 
                 id="edit-name"
                 name="name" 
                 value={editLecturer.name} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-department">Department</label>
               <input 
                 id="edit-department"
                 name="department" 
                 value={editLecturer.department} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-coursesTaught">Courses Taught (comma-separated IDs)</label>
               <input 
                 id="edit-coursesTaught"
                 name="coursesTaught" 
                 value={editLecturer.coursesTaught.join(', ')} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <button type="button" onClick={handleSaveLecturer}>Save Changes</button>
             </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerManager;
