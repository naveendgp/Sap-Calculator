import StudentCard from "../Card/StudentCard";

const StudentDetails = () => {
  return (
    <div className="Faculty-container">
      <div className="Table-head">
        <li className="facultyName">Name</li>
        <li className="assignedTo">Department</li>
        <li className="dOA">Marks Obtained</li>
      </div>
      <div className="Table-details">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
};

export default StudentDetails;
