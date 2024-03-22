import "./CardDesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileEdit,
  faUserCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { faEdit } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const StudentCard = ({ name, dep, id }) => {
  const deleteStudent = async (name) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteStudent?name=${encodeURIComponent(name)}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="FacultyCard">
      <ul className="FacultyCardDetails">
        <FontAwesomeIcon icon={faUserCircle} className="userProfile" />
        <li className="FacultyName">{name}</li>
        <li className="AssignedTo">{dep}</li>
        <li className="DOA">10</li>
        <FontAwesomeIcon icon={faEdit} className="Edit" />
        <FontAwesomeIcon
          icon={faTrash}
          className="Edit"
          onClick={() => deleteStudent(name)}
        />
      </ul>
    </div>
  );
};

export default StudentCard;
