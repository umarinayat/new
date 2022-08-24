import "./Hero.css";
import { VscSearch } from "react-icons/vsc";
import { Container, Form, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container fluid className="hero img-fluid section-cls">
        <div className=" h-100  row text-center p-5">
          <h1 className="custom-heading-fonts pt-4">5,000+ INSIGHTS</h1>
          <h1 className="custom-heading-fonts" style={{ color: "white" }}>
            FOR STOCK AND EFT MARKET<span style={{ color: "#FFA800" }}>.</span>
          </h1>
          <Form className="d-flex w-100 justify-content-center align-items-center pt-3">
            <Form.Control
              placeholder="Type here your first insight search"
              type="text"
              className="search"
            />

            <Button className="custom-button d-flex flex-row justify-centen-center align-items-center">
              Search
              <span>
                <VscSearch />
              </span>
            </Button>
          </Form>
          <p className="custom-subheading-fonts p-5 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            <br />
            <span style={{ color: "#FFA800" }}>nonummy nibh</span> euismod
            tincidunt ut laoreet dolore magna aliquam
            <br /> erat volutpat.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Hero;
