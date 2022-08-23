import "./Symfinder.css";

const SymfinderList = (props) => {
  return (
    <div className="sym-container-item">
      <img src={props.barChart} alt={props.text} />
      <h4>{props.text}</h4>
      <p className="main-description text-center">{props.p}</p>
      <p className="sub-description">.</p>
    </div>
  );
};

export default SymfinderList;
