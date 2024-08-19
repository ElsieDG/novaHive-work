import React, { useState } from 'react';
import '../../Styles/styles.css';
import '../../Styles/Admin-Teacher/CourseManager.css';
import LabeledInput from '../../components/FormInputs';
import LMSHeader from '../../components/Student/LmsHeader';
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import coursesData from '../../TestRunData.js/Admin-TeacherData';

function CourseManager() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [courses, setCourses] = useState(coursesData);
  const [activeTab, setActiveTab] = useState(0);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [newCourse, setNewCourse] = useState({
    name: '',
    courseCode: '',
    lecturers: [{ id: '', name: '' }],
    programType: '',
    department: '',
    numberOfStudents: '',
    period: ''
  });
  const [editCourse, setEditCourse] = useState(null);
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

  const sortedCourses = [...courses].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    const { name, courseCode, programType, department, numberOfStudents, period } = newCourse;

    // Check if any field is empty
    if (!name || !courseCode || !programType || !department || !numberOfStudents || !period) {
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage(''); // Clear the error message

    const newId = courses.length + 1;
    const updatedCourses = [...courses, { ...newCourse, id: newId }];
    setCourses(updatedCourses);
    
    // Clear newCourse state after adding
    setNewCourse({
      name: '',
      courseCode: '',
      lecturers: [{ id: '', name: '' }],
      programType: '',
      department: '',
      numberOfStudents: '',
      period: ''
    });

    // Alert the user and switch to the View Courses tab
    alert('Course has been added.');
    setActiveTab(0);
  };

  const handleEditCourse = (course) => {
    setEditCourse(course);
    setActiveTab(2); // Switch to the Edit tab
  };

  const handleSaveCourse = () => {
    const updatedCourses = courses.map((course) =>
      course.id === editCourse.id ? editCourse : course
    );
    setCourses(updatedCourses);
    setEditCourse(null);
    
    // Alert the user and switch to the View Courses tab
    alert('Course changes have been saved.');
    setActiveTab(0);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditCourse({ ...editCourse, [name]: value });
  };

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter(course => course.id !== courseId);
    setCourses(updatedCourses);
    setEditCourse(null);
  };

  return (
    <div className="app">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
        <LMSHeader />
        <div className="content">
          <div className='page-title'>
            <p>Manage Courses</p>
          </div>

          <div className="tab">
            <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>View Courses</button>
            <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Add Course</button>
            <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Edit Course</button>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Course List</h3>
            <table className='admin-table'>
              <thead>
                <tr>
                  <th onClick={() => handleSort('name')}>
                    Course Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('courseCode')}>
                    Course Code {sortField === 'courseCode' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('lecturers')}>
                    Lecturers {sortField === 'lecturers' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('numberOfStudents')}>
                    No. of Students {sortField === 'numberOfStudents' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedCourses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.courseCode}</td>
                    <td>{course.lecturers.map((lecturer) => lecturer.name).join(', ')}</td>
                    <td>{course.numberOfStudents}</td>
                    <td>
                      <button onClick={() => handleEditCourse(course)}>Edit</button>
                      <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Add New Course</h3>
            <form>
              <div className="input-container">
                <label className="input-label" htmlFor="name">Course Name</label>
                <input 
                  id="name"
                  name="name" 
                  value={newCourse.name} 
                  placeholder="Course Name" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="courseCode">Course Code</label>
                <input 
                  id="courseCode"
                  name="courseCode" 
                  value={newCourse.courseCode} 
                  placeholder="Course Code" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="programType">Program Type</label>
                <input 
                  id="programType"
                  name="programType" 
                  value={newCourse.programType} 
                  placeholder="Program Type" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="department">Department</label>
                <input 
                  id="department"
                  name="department" 
                  value={newCourse.department} 
                  placeholder="Department" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="numberOfStudents">Number of Students</label>
                <input 
                  id="numberOfStudents"
                  name="numberOfStudents" 
                  value={newCourse.numberOfStudents} 
                  placeholder="Number of Students" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="period">Period</label>
                <input 
                  id="period"
                  name="period" 
                  value={newCourse.period} 
                  placeholder="Period" 
                  onChange={handleInputChange} 
                  className="input-field" 
                />
              </div>

              <button type="button" onClick={handleAddCourse}>Add Course</button>
              
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>

          <div className="tabcontent" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
            <h3 className='admin-table-title'>Edit Course</h3>
            {editCourse && (
             <div>
             <div className="input-container">
               <label className="input-label" htmlFor="edit-name">Course Name</label>
               <input 
                 id="edit-name"
                 name="name" 
                 value={editCourse.name} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-courseCode">Course Code</label>
               <input 
                 id="edit-courseCode"
                 name="courseCode" 
                 value={editCourse.courseCode} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-programType">Program Type</label>
               <input 
                 id="edit-programType"
                 name="programType" 
                 value={editCourse.programType} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-department">Department</label>
               <input 
                 id="edit-department"
                 name="department" 
                 value={editCourse.department} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-numberOfStudents">Number of Students</label>
               <input 
                 id="edit-numberOfStudents"
                 name="numberOfStudents" 
                 value={editCourse.numberOfStudents} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <div className="input-container">
               <label className="input-label" htmlFor="edit-period">Period</label>
               <input 
                 id="edit-period"
                 name="period" 
                 value={editCourse.period} 
                 onChange={handleEditInputChange} 
                 className="input-field" 
               />
             </div>
           
             <button onClick={handleSaveCourse}>Save Changes</button>
           </div>
           
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManager;
