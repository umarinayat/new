import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import Symfinder from "../components/Symfinder/Symfinder";
import WebInfo from "../components/WebInfo/WebInfi";
import Insights from "../components/Insights/Insights";
import MobileInfo from "../components/MobileInfo/MobileInfo";
import Footer from "../components/Footer/Footer";
import SecondFooter from "../components/SecondFooter/SecondFooter";

import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Header />
        <Hero />
        {/* placeholder for news slide */}
        <div>PlaceHolder</div>
        <InfoBlock />
        <Symfinder />
        {/* <WebInfo /> */}
        <Insights />
        <MobileInfo />
        <Footer />
        <SecondFooter />
      </Container>
    </>
  );
};

export default HomePage;
