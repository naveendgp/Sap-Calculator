import { useState } from "react";
import { Link } from "react-router-dom";
import { FacultyMenu } from "../../Data/FacultyMenu";
import "./CompDesign.css";

const FacultyNavigation = () => {
  const [Menu, setMenu] = useState("Home");

  return (
    <div className="SideNav">
      <h3 className="Logo">SAP Calculator</h3>

      {FacultyMenu.map((item, key) => (
        <li
          key={key}
          className={Menu == item.title ? "active menu-items" : "menu-items"}
          onClick={() => setMenu(item.title)}
        >
          <Link className={"Link"} to={item.path}>
            {item.title}
          </Link>
        </li>

      ))}

      <hr className="divider" />

      <ul className="GetInTouch">
        

        <Link className={"Link1"} to={"/login"}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default FacultyNavigation;
