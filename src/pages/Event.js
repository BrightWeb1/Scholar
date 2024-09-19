import React from "react";
import HeroSection from "../Components/HeroSection";
import "../styles/Event.css";
import EventItem from "../Components/EventItem";
import EventImg1 from "../assets/images/event-01.jpg";
import EventImg2 from "../assets/images/event-02.jpg";
import EventImg3 from "../assets/images/event-03.jpg";
import Footer from "../Components/Footer";

const Event = () => {
  return (
    <div>
      <HeroSection title={"Event"} desc={""} />
      <div class="section events" id="events">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="section-heading">
                <h6>Schedule</h6>
                <h2>Upcoming Events</h2>
              </div>
            </div>
            <div class="col-lg-12 col-md-6">
              <EventItem
                imageSrc={EventImg1}
                category="Web Design"
                title="UI Best Practices"
                date="16 Feb 2036"
                duration="22 Hours"
                price="$120"
              />
            </div>
            <div class="col-lg-12 col-md-6">
              {" "}
              <EventItem
                imageSrc={EventImg2}
                category="Web Design"
                title="UI Best Practices"
                date="16 Feb 2036"
                duration="22 Hours"
                price="$120"
              />
            </div>
            <div class="col-lg-12 col-md-6">
              {" "}
              <EventItem
                imageSrc={EventImg3}
                category="Web Design"
                title="UI Best Practices"
                date="16 Feb 2036"
                duration="22 Hours"
                price="$120"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
