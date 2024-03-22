import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import { Department } from "../../Data/Department";
import SideNav from "../../Components/SideNavigation/SideNav";

const Home = () => {
  const data = { name: "naveen", age: "18" };

  return (
    <div className="main">
      <SideNav />
      <div>
        <div className="Head">
          <h3 className="title">Home</h3>
          <div className="profile">
            <h4>Profile</h4>
          </div>
        </div>

        <div className="Department">
          <h3>Departments</h3>
          <div className="Dep-Grid">
            {/* {Department.map((item, index) => (
              <Link
                key={index}
                to={{
                  pathname: "/student-details",
                  state: item.title,
                }}
                className="link"
              >
                <Card dept={item.title} />
              </Link>
            ))} */}
            <Link
              to={{
                pathname: "/student-details",
                state: {dept:"AIML"},
              }}
              className="link"
            >
              <Card dept={"AIML"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
