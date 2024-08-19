import React, { useState } from 'react';
import '../../Styles/styles.css';
import '../../Styles/Admin-Teacher/CourseManager.css';
import LMSHeader from '../../components/Student/LmsHeader';
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import studentsData from '../../TestRunData.js/Students';

function StudentManager() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [students, setStudents] = useState(studentsData);
  const [activeTab, setActiveTab] = useState(0);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    dateOfRegistration: '',
    program: '',
    department: '',
    numberOfCoursesRegistered: '',
    coursesRegistered: '',
  });
  const [editStudent, setEditStudent] = useState(null);
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

  const sortedStudents = [...students].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    const { name, dateOfRegistration, program, department, numberOfCoursesRegistered, coursesRegistered } = newStudent;

    // Check if any field is empty
    if (!name || !dateOfRegistration || !program || !department || !numberOfCoursesRegistered) {
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage(''); // Clear the error message

    const newId = students.length + 1;
    const updatedStudents = [...students, { ...newStudent, id: newId, coursesRegistered: coursesRegistered.split(',').map(Number) }];
    setStudents(updatedStudents);

    // Clear newStudent state after adding
    setNewStudent({
      id: '',
      name: '',
      dateOfRegistration: '',
      program: '',
      department: '',
      numberOfCoursesRegistered: '',
      coursesRegistered: [],
    });

    // Alert the user and switch to the View Students tab
    alert('Student has been added.');
    setActiveTab(0);
  };

  const handleEditStudent = (student) => {
    setEditStudent(student);
    setActiveTab(2); // Switch to the Edit tab
  };

  const handleSaveStudent = () => {
    const updatedStudents = students.map((student) =>
      student.id === editStudent.id ? editStudent : student
    );
    setStudents(updatedStudents);
    setEditStudent(null);

    // Alert the user and switch to the View Students tab
    alert('Student changes have been saved.');
    setActiveTab(0);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  const handleDeleteStudent = (studentId) => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
    setEditStudent(null);
  };

  return (
    <div className="app">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader />
        <div className="content">
          <div className='page-title'>
            <p>Manage Students</p>
          </div>

          <div className="tab">
            <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>View Students</button>
            <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Add Student</button>
            <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Edit Student</button>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Student List</h3>
            <table className='admin-table'>
              <thead>
                <tr>
                <th onClick={() => handleSort('id')}>
                    ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('name')}>
                    Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('dateOfRegistration')}>
                    Date of Registration {sortField === 'dateOfRegistration' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('program')}>
                    Program {sortField === 'program' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('department')}>
                    Department {sortField === 'department' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('numberOfCoursesRegistered')}>
                    No. of Courses Registered {sortField === 'numberOfCoursesRegistered' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('coursesRegistered')}>
                    Courses Registered {sortField === 'coursesRegistered' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.dateOfRegistration}</td>
                    <td>{student.program}</td>
                    <td>{student.department}</td>
                    <td>{student.numberOfCoursesRegistered}</td>
                    <td>{`${student.coursesRegistered}`}</td>

                    <td>
                      <button onClick={() => handleEditStudent(student)}>Edit</button>
                      <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Add New Student</h3>
            <form>
              <div className="input-container">
                <label className="input-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={newStudent.name}
                  placeholder="Student Name"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="name">ID</label>
                <input
                  id="id"
                  name="id"
                  value={newStudent.id}
                  placeholder="Student ID"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="dateOfRegistration">Date of Registration</label>
                <input
                  id="dateOfRegistration"
                  name="dateOfRegistration"
                  value={newStudent.dateOfRegistration}
                  placeholder="YYYY-MM-DD"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="program">Program</label>
                <input
                  id="program"
                  name="program"
                  value={newStudent.program}
                  placeholder="Program"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="department">Department</label>
                <input
                  id="department"
                  name="department"
                  value={newStudent.department}
                  placeholder="Department"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="numberOfCoursesRegistered">Number of Courses Registered</label>
                <input
                  id="numberOfCoursesRegistered"
                  name="numberOfCoursesRegistered"
                  value={newStudent.numberOfCoursesRegistered}
                  placeholder="Number of Courses"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="coursesRegistered">Courses Registered (Comma Separated IDs)</label>
                <input
                  id="coursesRegistered"
                  name="coursesRegistered"
                  // value={newStudent.coursesRegistered.join(',')}
                  placeholder="Comma Separated IDs"
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <button type="button" onClick={handleAddStudent}>Add Student</button>
              
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Edit Student</h3>
            {editStudent ? (
             <div>
             <div className="input-container">
               <label className="input-label" htmlFor="edit-name">Name</label>
               <input 
                 id="edit-name"
                 name="name" 
                 value={editStudent.name} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-courseCode">Program</label>
               <input 
                 id="edit-program"
                 name="program" 
                 value={editStudent.program} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-programType">Department</label>
               <input 
                 id="edit-department"
                 name="department" 
                 value={editStudent.department} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-department">Number Of Courses Registered</label>
               <input 
                 id="edit-numberOfCoursesRegistered"
                 name="numberOfCoursesRegistered" 
                 value={editStudent.numberOfCoursesRegistered} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-numberOfStudents">Courses</label>
               <input 
                 id="edit-coursesRegistered"
                 name="coursesRegistered" 
                 value={editStudent.coursesRegistered} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
         
             <button onClick={handleSaveStudent}>Save Changes</button>
              </div>      
                )  : (
                  <p>Select a student to edit.</p>
                )} 
              </div>
              </div>
              </div>
              </div>



              )}
export default StudentManager;              