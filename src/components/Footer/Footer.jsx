import logo from "../../assets/grey-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container row text-center m-0">
      <div className="footer-logo-container col-md-3 col-lg-3 my-auto">
        <h4 className="py-2">SYMFINDER</h4>
        <img src={logo} alt="logo" />
      </div>
      <div className="section-container col-md-3 col-lg-3 my-auto">
        <h5>Section Title</h5>
        <p>page name</p>
        <p>page name</p>
        <p>page name</p>
      </div>
      <div className="section-container col-md-3 col-lg-3 my-auto">
        <h5>Section Title</h5>
        <p>page name</p>
        <p>page name</p>
        <p>page name</p>
      </div>
      <div className="section-container col-md-3 col-lg-3 my-auto">
        <h5>Section Title</h5>
        <p>page name</p>
        <p>page name</p>
        <p>page name</p>
      </div>
    </div>
  );
};

export default Footer;
