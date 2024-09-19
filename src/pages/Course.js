import React from "react";
import HeroSection from "../Components/HeroSection";
import CoursesItem from "../Components/CoursesItem";
import Course1 from "../assets/images/course-01.jpg";
import Course2 from "../assets/images/course-02.jpg";
import Course3 from "../assets/images/course-03.jpg";
import "../styles/Course.css";
import Footer from "../Components/Footer";

const Course = () => {
  return (
    <div>
      <HeroSection title={"Courses"} dzsc={""} />
      <div class="courses container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-heading">
              <h6>Latest Courses</h6>
              <h2>Latest Courses</h2>
            </div>
          </div>
        </div>
        <div class="row event_box">
          <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
            <CoursesItem
              imageSrc={Course1}
              category="Webdesign"
              price="160"
              author="Stella Blair"
              title="Learn Web Design"
            />
          </div>
          <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
            {" "}
            <CoursesItem
              imageSrc={Course2}
              category="Webdesign"
              price="160"
              author="Stella Blair"
              title="Learn Web Design"
            />
          </div>
          <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
            {" "}
            <CoursesItem
              imageSrc={Course3}
              category="Webdesign"
              price="160"
              author="Stella Blair"
              title="Learn Web Design"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
