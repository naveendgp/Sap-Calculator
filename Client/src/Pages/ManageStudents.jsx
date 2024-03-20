import CardBanner from "../Components/Card/CardBanner";
import FacultyDetails from "../Components/FacultyDetails/FacultyDetails";

const ManageStudents = () => {
  return (
    <div>
      <div className="Head">
        <h3 className="title">Manage Faculties</h3>
      </div>
      <section>
        <CardBanner />
        <FacultyDetails />
      </section>
    </div>
  );
};

export default ManageStudents;
