import React, { useState } from 'react';
import transformedData from '../../TestRunData.js/Academics'; // Adjust path if necessary
import AdminSidebar from '../../components/Admin-Teacher/AdminSidebar';
import LMSHeader from '../../components/Student/LmsHeader';
import '../../Styles/styles.css'; // Ensure correct path to your CSS
import '../../Styles/Admin-Teacher/CourseManager.css';


function AcademicsTable() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown


  const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
  };


  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const handleSort = (field) => {
    const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(direction);
  };

  const sortedData = [...transformedData].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="app">
  <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  <div className={isSidebarOpen ? 'main-content' : 'main-content-closed'}>
    <LMSHeader/>
    <div className="content">
      <div className='page-title'>
        <p>Academic Report</p>
      </div>

      <div className='table-container'>
      <table className='admin-table'>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('courseCode')}>
              Course Code {sortField === 'courseCode' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('lecturers')}>
              Grade {sortField === 'lecturers' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('numberOfStudents')}>
              Status {sortField === 'numberOfStudents' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.courseCode}</td>
              <td>{item.lecturers}</td>
              <td>{item.numberOfStudents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  </div>
</div>


    
  );
}

export default AcademicsTable;
