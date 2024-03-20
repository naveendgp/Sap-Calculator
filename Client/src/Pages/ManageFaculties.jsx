import CardBanner from "../Components/Card/CardBanner";
import FacultyDetails from "../Components/FacultyDetails/FacultyDetails";
import SideNav from "../Components/SideNavigation/SideNav";

const ManageFaculties = () => {
  return (

    <div className="main">
      <SideNav/>
    <div>
      <div className="Head">
        <h3 className="title">Manage Faculties</h3>
      </div>
      <section>
        <CardBanner />
        <FacultyDetails/>
      </section>
    </div>
    </div>
  );
};

export default ManageFaculties;
