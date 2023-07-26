import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              AKASH SHRIVASTAVA
              <span class="text-primary"></span>
            </h1>
            <div class="subheading mb-5">
              IAS COLONY BAILEY ROAD NEAR REKHA ENCLAVE PATNA-801503·
              <a href="akashshrivastava589@gmail.com">akashshrivastava589@email.com</a>
            </div>
            <p class="lead mb-5">
            My name is AKASH SHRIVASTAVA. I am from BIHAR.
            I am persuing my B-Tech in Electronics and communication from IIIT SRICITY.

            I have learned Technologies like C++, DSA, HTML,CSS,React,Javascript. And I am skilled in Web Development and Designing.

            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">INDIAN INSTITUTE OF INFORMATION AND TECHNOLOGY SRICITY</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Electronic and communication- Web Development Track</div>
                <p>GPA: 7.5</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 - May 2025</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">DELHI PUBLIC SCHOOL</h3>
                <div class="subheading mb-3">CLASS 10</div>
                <p>GPA: 9.2</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2016 - May 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Home;
