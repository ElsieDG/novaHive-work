import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import StudentDashboard from './Pages/Student/StudentDashboard';
// import StudentDashboard from './Pages/StudentDashboard';
import ApplicationForm from './Pages/ApplicationFormPage';
import ResourcesPage from './Pages/Student/ResourcesPage';
import AssignmentPage from './Pages/Student/AssignmentPage';
import NotificationPage from './Pages/Student/NotificationPage';
import Overview from './Pages/Student/OverviewPage';
import StudentProfile from './Pages/Student/StudentProfilePage';
import QuizPage from './Pages/Student/QuizzesPage';

import AdminDashboard from './Pages/Admin-Teacher.js/AdminDashboard';
import CourseManager from './Pages/Admin-Teacher.js/CourseManager';
import StudentManager from './Pages/Admin-Teacher.js/StudentManager';
import LecturerManager from './Pages/Admin-Teacher.js/LecturerManager';
import AdminNotificationPage from './Pages/Admin-Teacher.js/AdminNotificationPage';
import AdminResourcePage from './Pages/Admin-Teacher.js/AdminResourcePage';
import AcademicsTable from './Pages/Admin-Teacher.js/AcademicsPage';

function App() {
  return (
    <>
    <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/ApplicationFormPage" element={<ApplicationForm />} />
          <Route path="/Student/Dashboard" element={<StudentDashboard />} />
          <Route path="/Student/Resources" element={<ResourcesPage />} />
          <Route path="/Student/Assignments" element={<AssignmentPage />} />
          <Route path="/Student/Notifications" element={<NotificationPage />} />
          <Route path="/Student/:courseId/Overview" element={<Overview/>} />
          <Route path="/Student/MyProfile" element={<StudentProfile />} />
          <Route path="/Student/Quizzes" element={<QuizPage />} />

          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/Course-Manager" element={<CourseManager />} />
          <Route path="/Admin/Student-Manager" element={<StudentManager />} />
          <Route path="/Admin/Lecturer-Manager" element={<LecturerManager />} />
          <Route path="/Admin/Notifications" element={<AdminNotificationPage />} />
          <Route path="/Admin/Resources" element={<AdminResourcePage />} />
          <Route path="/Admin/Academics" element={<AcademicsTable />} />



        </Routes>
    </Router>
  </>
  );
}

export default App;
