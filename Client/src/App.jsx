import Register from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ManageFaculties from "./Pages/ManageFaculties";
import SideNav from "./Components/SideNavigation/SideNav";
import AddFaculty from "./Pages/AddFaculty";
import StudentDetails from "./Components/StudentDetails/StudentDetails";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/add-faculty" element={<AddFaculty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/manage-faculties" element={<ManageFaculties />} />
          <Route path="/student-details" element={<StudentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
