import CardBanner from "../../Components/Card/CardBanner";
import StudentDetails from "../../Components/FacultyDetails/StudentDetails";
import SideNav from "../../Components/SideNavigation/SideNav";
import { useLocation } from "react-router-dom";

const ManageStudents = () => {

 const location = useLocation()
 console.log(location)
  return (
    <div className="main">
      <SideNav />
      <div>
        <div className="Head">
          <h3 className="title">Manage Students</h3>
          <h4>{location.dept}</h4>
        </div>
        <section>
          <CardBanner />
          <StudentDetails />
        </section>
      </div>
    </div>
  );
};

export default ManageStudents;
