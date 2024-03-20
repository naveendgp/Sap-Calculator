import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideNav from "../Components/SideNavigation/SideNav";
const AddFaculty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="main">
      <SideNav />
      <div>
        <div className="Head">
          <h3 className="title">Add Faculty</h3>
        </div>
        <section className="add-faculty">
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Faculty Name</h4>
              <input
                type="Text"
                className="InputField"
                placeHolder="Enter Name here.."
              />
            </div>

            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Faculty Email</h4>
              <input
                type="Text"
                className="InputField"
                placeHolder="Enter Email here.."
              />
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "0vh" }}>
            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Password</h4>
              <input
                type="password"
                className="InputField"
                placeHolder="Enter Password here.."
              />
            </div>

            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Confirm Password</h4>
              <input
                type="password"
                className="InputField"
                placeHolder="Enter Confirm password here.."
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "20vh", marginTop: "0vh" }}>
              <h4 className="faculty-name">Phone Number</h4>
              <input
                type="text"
                className="InputField"
                placeHolder="Enter Phone number here.."
              />
            </div>
            <div style={{ marginLeft: "22vh", marginTop: "7vh" }}>
              <h4>Allocate Department</h4>
              <div className="dropdown" onClick={toggleDropdown}>
                <span
                  style={{
                    flex: "0",
                    width: "10vh",
                  }}
                >
                  {selectedOption ? (
                    <p>{selectedOption}</p>
                  ) : (
                    "Select an option"
                  )}
                </span>
                <span style={{ marginLeft: "14vh" }}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
                {isOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={() => handleOptionSelect("Option 1")}>
                        AIML
                      </li>
                      <li onClick={() => handleOptionSelect("Option 2")}>
                        AIDS
                      </li>
                      <li onClick={() => handleOptionSelect("Option 3")}>
                        CSE
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button className="btn">Add Faculty</button>
        </section>
      </div>
    </div>
  );
};

export default AddFaculty;
