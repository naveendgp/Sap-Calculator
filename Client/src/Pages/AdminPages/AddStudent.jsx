import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideNav from "../../Components/SideNavigation/SideNav";
import axios from "axios";

const AddStudent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [allocatedDep, setDep] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setDep(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = "Student";
    try {
      const response = await axios.post("http://localhost:8000/addStudent", {
        name,
        password,
        phoneNumber,
        allocatedDep,
        email,
        role,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <SideNav />
      <div>
        <div className="Head">
          <h3 className="title">Add Student </h3>
        </div>
        <section className="add-faculty">
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Student Name</h4>
              <input
                type="Text"
                className="InputField"
                placeholder="Enter Name here.."
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Student Email</h4>
              <input
                type="Text"
                className="InputField"
                placeholder="Enter Email here.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "0vh" }}>
            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Password</h4>
              <input
                type="password"
                className="InputField"
                placeholder="Enter Password here.."
              />
            </div>

            <div style={{ marginLeft: "20vh" }}>
              <h4 className="faculty-name">Confirm Password</h4>
              <input
                type="password"
                className="InputField"
                placeholder="Enter Confirm password here.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "20vh", marginTop: "0vh" }}>
              <h4 className="faculty-name">Phone Number</h4>
              <input
                type="text"
                className="InputField"
                placeholder="Enter Phone number here.."
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div style={{ marginLeft: "22vh", marginTop: "7vh" }}>
              <h4>Allocate Department</h4>
              <div className="dropdown" onClick={toggleDropdown}>
                <div style={{ display: "flex" }}>
                  <div className="selected-option">
                    {selectedOption ? (
                      <p>{selectedOption}</p>
                    ) : (
                      "Select an option"
                    )}
                  </div>
                  <div className="drop-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
                {isOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li
                        onClick={() => {
                          handleOptionSelect("AIML");
                        }}
                      >
                        AIML
                      </li>
                      <li
                        onClick={() => {
                          handleOptionSelect("AIDS");
                        }}
                      >
                        AIDS
                      </li>
                      <li
                        onClick={() => {
                          handleOptionSelect("CSE");
                        }}
                      >
                        CSE
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button className="btn" onClick={handleSubmit}>
            Add Student
          </button>
        </section>
      </div>
    </div>
  );
};

export default AddStudent;
