import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">INDIAN INSTITUTE OF INFORMATION AND TECHNOLOGY SRICITY</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>ELECTRONICS AND COMMUNICATION - Web Development Track</div>
                <p>GPA: 7.5</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 - May 2025</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">DELHI PUBLIC SCHOOL PATNA</h3>
                <div class="subheading mb-3">CLASS 12</div>
                <p>GPA: 9.5</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2018 - May 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;