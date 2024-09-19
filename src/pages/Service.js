import React from "react";
import ServiceItem from "../Components/ServiceItem";
import Img1 from "../assets/images/service-01.png";
import Img2 from "../assets/images/service-02.png";
import Img3 from "../assets/images/service-03.png";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

const Service = () => {
  return (
    <>
      <HeroSection title={"Services"} desc={""} />
      <div className="pt-5 mt-3 container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <ServiceItem
              img={Img1}
              title="Online Degrees"
              desc="Whenever you need free templates in HTML CSS, you just remember TemplateMo website."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceItem
              img={Img2}
              title="Short Courses"
              desc="You can browse free templates based on different tags such as digital marketing, etc. "
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ServiceItem
              img={Img3}
              title="Web Experts"
              desc="You can start learning HTML CSS by modifying free templates from our website too. "
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
