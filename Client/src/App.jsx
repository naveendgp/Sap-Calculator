import Register from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/AdminPages/Home";
import Login from "./Pages/Login";
import ManageFaculties from "./Pages/AdminPages/ManageFaculties";
import AddFaculty from "./Pages/AdminPages/AddFaculty";
import ManageStudents from "./Pages/AdminPages/ManageStudents";
import FacultyHome from "./Pages/FacultyPages/FacultyHome";
import FacultyAddStudent from "./Pages/FacultyPages/FacultyAddStudent";
import AddStudent from "./Pages/AdminPages/AddStudent";
import SapReports from "./Pages/FacultyPages/SapReports";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/manage-faculties" element={<ManageFaculties />} />
          <Route path="/student-details" element={<ManageStudents />} />
          <Route path="/add-faculty" element={<AddFaculty />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/faculty-home" element={<FacultyHome />} />
          <Route path="/faculty-sap-reports" element={<SapReports />} />
          <Route path="/faculty-add-student" element={<FacultyAddStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
