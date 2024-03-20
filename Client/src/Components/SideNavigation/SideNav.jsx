import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./CompDesign.css";

const SideNav = () => {
  const [Menu, setMenu] = useState("Home");

  return (
    <div className="SideNav">
      <h3 className="Logo">SAP Calculator</h3>

      {MenuItems.map((item, key) => (
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
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default SideNav;
