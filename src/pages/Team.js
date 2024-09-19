import React from "react";
import HeroSection from "../Components/HeroSection";
import TeamMember from "../Components/TeamMember";
import T1 from "../assets/images/member-01.jpg";
import T2 from "../assets/images/member-02.jpg";
import T3 from "../assets/images/member-03.jpg";
import T4 from "../assets/images/member-04.jpg";
import Footer from "../Components/Footer";

const Team = () => {
  return (
    <div>
      <HeroSection title={"Team"} desc={""} />
      <div className="container" style={{ marginTop: 100, paddingTop: 140 }}>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <TeamMember
              img={T1}
              category="Full Stack Master"
              name="David Hutson"
              socialLinks={[
                { url: "#", iconClass: "fab fa-facebook" },
                { url: "#", iconClass: "fab fa-twitter" },
                { url: "#", iconClass: "fab fa-linkedin" },
              ]}
            />
          </div>
          <div class="col-lg-3 col-md-6">
            <TeamMember
              img={T2}
              category="Full Stack Master"
              name="David Hutson"
              socialLinks={[
                { url: "#", iconClass: "fab fa-facebook" },
                { url: "#", iconClass: "fab fa-twitter" },
                { url: "#", iconClass: "fab fa-linkedin" },
              ]}
            />
          </div>
          <div class="col-lg-3 col-md-6">
            <TeamMember
              img={T3}
              category="Full Stack Master"
              name="David Hutson"
              socialLinks={[
                { url: "#", iconClass: "fab fa-facebook" },
                { url: "#", iconClass: "fab fa-twitter" },
                { url: "#", iconClass: "fab fa-linkedin" },
              ]}
            />
          </div>
          <div class="col-lg-3 col-md-6">
            <TeamMember
              img={T4}
              category="Full Stack Master"
              name="David Hutson"
              socialLinks={[
                { url: "#", iconClass: "fab fa-facebook" },
                { url: "#", iconClass: "fab fa-twitter" },
                { url: "#", iconClass: "fab fa-linkedin" },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
