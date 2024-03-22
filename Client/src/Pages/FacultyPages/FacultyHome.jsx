import FacultyNavigation from "../../Components/SideNavigation/FacultyNavigation";
import { useEffect, useState } from "react";
import StudentCard from "../../Components/Card/StudentCard";
import axios from "axios";

const FacultyHome = () => {
  const [student, setStudent] = useState([]);

  const getStudents = async () => {
    const allocatedDep = "AIML";

    try {
      const response = await axios.get(
        `http://localhost:8000/faculty/students?allocatedDep=${encodeURIComponent(
          allocatedDep
        )}`
      );
      console.log(response.data);
      setStudent(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="main">
      <FacultyNavigation />
      <div>
        <div className="Head">
          <h3 className="title">Home</h3>
        </div>
        {student.map((item) => (
          <StudentCard
            name={item.name}
            dep={item.allocatedDep}
            id={item._id}
          />
        ))}
        {/* <StudentCard name={student[0].name} dep={student[0].allocatedDep} /> */}
      </div>
    </div>
  );
};

export default FacultyHome;
