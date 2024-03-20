import "./CardDesign.css";

const Card = ({dept}) => {
  return (
    <div className="Container">
      <div className="head">
        <h3>{dept}</h3>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default Card;
