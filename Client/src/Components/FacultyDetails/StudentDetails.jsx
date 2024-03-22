import "./FacultyDesign.css";
import FacultyCard from "../Card/FacultyCard";
import axios from "axios";
import { useState, useEffect } from "react";

const StudentDetails = () => {
  const [Faculty, setFaculty] = useState([]);

  const GetAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getStudent");
      console.log(response.data);
      setFaculty(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    GetAllStudents();
  }, []);

  return (
    <div className="Faculty-container">
      <div className="Table-head">
        <li className="facultyName">Name</li>
        <li className="assignedTo">Department</li>
        <li className="dOA">Email</li>
      </div>
      <div className="Table-details">
        {Faculty.map((item) => (
          <FacultyCard
            name={item.name}
            Dep={item.allocatedDep}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
