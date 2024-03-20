import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";
import SideNav from "../Components/SideNavigation/SideNav";

const Home = () => {
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
            <Link to={"/student-details"} className="link">
              <Card dept={"AIML"} />
            </Link>
            <Card dept={"AIDS"} />
            <Card dept={"CSE"} />
            <Card dept={"CSD"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
