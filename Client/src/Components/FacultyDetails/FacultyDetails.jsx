import "./FacultyDesign.css";
import FacultyCard from "../Card/FacultyCard";

const FacultyDetails = () => {
  return (
    <div className="Faculty-container">
      <div className="Table-head">
        <li className="facultyName">Name</li>
        <li className="assignedTo">Assigned To</li>
        <li className="dOA">Date Of Assigned</li>
      </div>
      <div className="Table-details">
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
      </div>
    </div>
  );
};

export default FacultyDetails;
