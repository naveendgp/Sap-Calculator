import "./CardDesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileEdit,
  faUserCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { faEdit } from "@fortawesome/free-regular-svg-icons";

const FacultyCard = () => {
  return (
    <div className="FacultyCard">
      <ul className="FacultyCardDetails">
        <FontAwesomeIcon icon={faUserCircle} className="userProfile" />
        <li className="FacultyName">Naveen </li>
        <li className="AssignedTo">AIML</li>
        <li className="DOA">10th February 2023</li>
        <FontAwesomeIcon icon={faEdit} className="Edit" />
        <FontAwesomeIcon icon={faTrash} className="Edit" />
      </ul>
    </div>
  );
};

export default FacultyCard;
