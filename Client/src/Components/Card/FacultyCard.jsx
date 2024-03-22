import "./CardDesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileEdit,
  faUserCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { faEdit } from "@fortawesome/free-regular-svg-icons";

const FacultyCard = ({name,Dep,email}) => {
  return (
    <div className="FacultyCard">
      <ul className="FacultyCardDetails">
        <FontAwesomeIcon icon={faUserCircle} className="userProfile" />
        <li className="FacultyName">{name} </li>
        <li className="AssignedTo">{Dep}</li>
        <li className="DOA">{email}</li>
        <FontAwesomeIcon icon={faEdit} className="Edit" />
        <FontAwesomeIcon icon={faTrash} className="Edit" />
      </ul>
    </div>
  );
};

export default FacultyCard;
