"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <>
      <div className="banner-area-2 big-bg-2">
        <div className="container">
          <div className="banner-content-2">
            <div className="content">
              <span data-aos="fade-zoom-in" data-aos-delay="300">
                The Best University of The State
              </span>
              <h1 data-aos="fade-up" data-aos-delay="200">
                Transformative Education
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered altera some injected humour, or
                randomised words which don't look even slightly believable.
              </p>
              <div
                className="buttons-action"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a className="default-btn" href="">
                  Apply to USD
                </a>
                <a className="default-btn btn-style-2" href="">
                  Chat with Us
                </a>
              </div>
              <div
                className="vertical-lr"
                data-aos="fade-zoom-in"
                data-aos-delay="100"
              >
                <p>
                  Transformative Education <span>12-10-2024</span>
                </p>
              </div>

              <div
                className="scroll-down"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <a href="#about">
                  <i className="bx bx-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-area-2">
        <div className="features-content-2 ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="sub-title">
                  <p>Our Best Features</p>
                </div>
                <div className="content">
                  <h2>Our students create a vibrant and inclusive community</h2>
                  <div className="item">
                    <div className="item-content">
                      <div className="icon">
                        <img
                          src="frontend/assets/img/icon/features-icon-2.png"
                          alt="image"
                        />
                      </div>
                      <h3>Education Services</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusm tem incid idunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-content">
                      <div className="icon">
                        <img
                          src="frontend/assets/img/icon/features-icon-1.png"
                          alt="image"
                        />
                      </div>
                      <h3>Efficient & Flexible</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusm tem incid idunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                  <a className="default-btn" href="admission">
                    More on Admission
                  </a>

                  <div className="arrow-icon">
                    <img
                      src="frontend/assets/img/icon/shape-1.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="academic-content">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 pt-25">
                      <div
                        className="academic-item"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="image">
                          <img
                            src="frontend/assets/img/all-img/academic-image-1.png"
                            alt="image"
                          />
                          <div className="number">
                            <h3>01</h3>
                          </div>
                        </div>
                        <div className="content">
                          <h4>International Hubs</h4>
                          <a className="btn" href="fitness-athletics">
                            Learn More <i className="bx bx-right-arrow-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div
                        className="academic-item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div className="image">
                          <img
                            src="frontend/assets/img/all-img/academic-image-2.png"
                            alt="image"
                          />
                          <div className="number">
                            <h3>02</h3>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Bachelor’s & Master’s</h4>
                          <a className="btn" href="support-guidance">
                            Learn More <i className="bx bx-right-arrow-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 pt-25">
                      <div
                        className="academic-item"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="image">
                          <img
                            src="frontend/assets/img/all-img/academic-image-3.png"
                            alt="image"
                          />
                          <div className="number">
                            <h3>03</h3>
                          </div>
                        </div>
                        <div className="content">
                          <h4>University Life</h4>
                          <a className="btn" href="university-life">
                            Learn More <i className="bx bx-right-arrow-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div
                        className="academic-item"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="image">
                          <img
                            src="frontend/assets/img/all-img/academic-image-4.png"
                            alt="image"
                          />
                          <div className="number">
                            <h3>04</h3>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Education Services</h4>
                          <a className="btn" href="the-campus-experience">
                            Learn More <i className="bx bx-right-arrow-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-area">
        <div className="container">
          <div
            className="video-play-btn"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=B03IqRlOhG0"
            >
              Play
            </a>
          </div>
        </div>
      </div>

      <div className="news-area ptb-100">
        <div className="container">
          <div
            className="section-title section-title-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="sub-title">
              <p>Campus News</p>
            </div>
            <h2>
              Stories About People, Research, and Innovation Across The Farm
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="news-content">
                <ul>
                  <li
                    className="news-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="image">
                      <img
                        src="frontend/assets/img/all-img/news-image-1.png"
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <div className="sub-title">
                        <i className="bx bxs-graduation"></i>{" "}
                        <p>Science and technology</p>
                      </div>
                      <h2>
                        <a href="blog-details">
                          Robot Provides Personalized Room Cleanup
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipiscingl sed
                        do eiusm tem incid idunt ut labore.
                      </p>
                      <a className="btn" href="blog-details">
                        Continue Reading...
                      </a>
                    </div>
                  </li>
                  <li
                    className="news-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="image">
                      <img
                        src="frontend/assets/img/all-img/news-image-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <div className="sub-title">
                        <i className="bx bxs-graduation"></i>{" "}
                        <p>Law and Policy</p>
                      </div>
                      <h2>
                        <a href="blog-details">
                          Learning Network Webinars for Music Teachers
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipiscingl sed
                        do eiusm tem incid idunt ut labore.
                      </p>
                      <a className="btn" href="blog-details">
                        Continue Reading...
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="news-content-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="content-box">
                  <img
                    src="frontend/assets/img/all-img/news-image-3.png"
                    alt="iamge"
                  />
                  <div className="content">
                    <h3>
                      <a href="blog-details">
                        Gender inequality in higher education persists
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conse sed do eiusm tem incid
                      idunt ut labore.
                    </p>
                    <a className="btn" href="blog-details">
                      Continue Reading...
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="news-content-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="content-box">
                  <div className="image">
                    <img
                      src="frontend/assets/img/all-img/news-image-4.png"
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      <i className="bx bxs-graduation"></i> <p>Medicine</p>
                    </div>
                    <h3>
                      <a href="blog-details">
                        Empowering Health, One Patient at a Time.
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="content-box">
                  <div className="image">
                    <img
                      src="frontend/assets/img/all-img/news-image-5.png"
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      <i className="bx bxs-graduation"></i> <p>Student Life</p>
                    </div>
                    <h3>
                      <a href="blog-details">
                        Every Student, Every Dream, Every Success.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-btn text-center"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <p>
              Where Dreams Take Flight.{" "}
              <a href="news-and-blog">
                More Campus News <i className="bx bx-right-arrow-alt"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="faculty-area-2 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="heading" data-aos="fade-up" data-aos-delay="100">
                <h2>Scholarship Programs</h2>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readablecont of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has more-or-less normal
                  distribution of letters, as opposed to using.
                </p>
              </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="300">
              <div className="button">
                <a className="default-btn" href="financial-aid">
                  Financial Aid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-search style-2 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="course-search-box" data-aos="fade-right">
                <h4>Search For Courses</h4>
                <div className="search-key">
                  <input
                    className="form-control"
                    placeholder="Keywords"
                    type="search"
                    value=""
                    id="searchKey1"
                  />
                  <input
                    className="form-control"
                    placeholder="Course ID"
                    type="search"
                    value=""
                    id="searchKey"
                  />

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey2"
                  >
                    <option selected>Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey3"
                  >
                    <option selected>Campus</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey4"
                  >
                    <option selected>Level</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey5"
                  >
                    <option selected>Instructor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey6"
                  >
                    <option selected>Semester</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="searchKey7"
                  >
                    <option selected>Credit</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <a className="default-btn" href="#">
                    Search Courses
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="quick-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title">
                  <p>Campus News</p>
                </div>
                <h2>Start Your Career & Pursue Your Passion</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readablecont of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it ha more-or-less normal
                  distribution of letters, as opposed to using.
                </p>

                <div className="list">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="list-items">
                        <ul>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i> Alumni
                            & Donors
                          </li>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i>{" "}
                            Athletic Calendar
                          </li>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i> All
                            Canyon Events
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="list-items">
                        <ul>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i>{" "}
                            Partnership & Out Reach
                          </li>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i>{" "}
                            Academic Programs
                          </li>
                          <li>
                            <i className="bx bx-right-arrow-circle"></i> Tution
                            And Fees
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="apply-banner">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <p>Apply for Admission</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 text-end">
                      <a className="default-btn" href="application-form">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="user-exprience">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="user-info">
                        <div className="image">
                          <img
                            src="frontend/assets/img/all-img/admin-image.png"
                            alt="image"
                          />
                        </div>
                        <div className="text">
                          <h4>John Michael</h4>
                          <p>Founder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <div className="exprience">
                        <div className="icon">
                          <img
                            src="frontend/assets/img/icon/trophy-star.png"
                            alt="image"
                          />
                        </div>
                        <div className="text">
                          <h4>20</h4>
                          <p>
                            Years of <br /> Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="activities-area ptb-100">
        <div className="container">
          <div
            className="section-title section-title-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="sub-title">
              <p>Sports and Athletics</p>
            </div>
            <h2>Beyond the Bleachers: Diverse Sports & Activities</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="activities-card style-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/activities-image-1.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h2>
                    <a href="student-activities">Home of Champions</a>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum aviable
                    but the majority have suffered alteration in some form.
                  </p>
                  <a className="btn" href="student-activities">
                    National Championships
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 pt-25">
              <div
                className="activities-card style-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/activities-image-2.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h2>
                    <a href="support-guidance">Olympic Excellence</a>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum aviable
                    but the majority have suffered alteration in some form.
                  </p>
                  <a className="btn" href="support-guidance">
                    Medals
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="activities-card style-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/activities-image-3.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <h2>
                    <a href="fitness-athletics">Multidimensional Impact</a>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum aviable
                    but the majority have suffered alteration in some form.
                  </p>
                  <a className="btn" href="fitness-athletics">
                    Athlete Stories
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-btn text-center"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <p>
              Inspiring Minds, Shaping Futures.{" "}
              <a href="fitness-athletics">
                More About Athletics <i className="bx bx-right-arrow-alt"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="events-area-2 pt-100">
        <div className="container">
          <div
            className="section-title section-title-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="sub-title">
              <p>News and Events</p>
            </div>
            <h2>Recent Important Stories Updated</h2>
          </div>

          <div className="event lg" data-aos="fade-up" data-aos-delay="100">
            <div className="content">
              <div className="image">
                <img
                  src="frontend/assets/img/all-img/events-image-1.png"
                  alt="image"
                />
              </div>
              <div className="text">
                <div className="tag">Featured News</div>
                <h2>
                  <a href="blog-details">
                    Celebrating Hispanic Heritage Month: Sioma Waisburd
                  </a>
                </h2>
                <span>October 06, 2024</span>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority havesu fered alteration in some
                  form, by injected humour.
                </p>
                <div className="link">
                  <a href="blog-details">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="recent-post">
                <h4 data-aos="fade-zoom-in" data-aos-delay="100">
                  Recent News
                </h4>
                <div className="event" data-aos="fade-up" data-aos-delay="100">
                  <div className="content">
                    <div className="image">
                      <img
                        src="frontend/assets/img/all-img/events-image-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="text">
                      <div className="tag">News</div>
                      <h2>
                        <a href="blog-details">
                          Navigating Academia: Tips and Stories from Canyon
                          University
                        </a>
                      </h2>
                      <span>October 06, 2024</span>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        avala fered alteration in some form.
                      </p>
                      <div className="link">
                        <a href="v">
                          <i className="bx bx-link-external"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event" data-aos="fade-up" data-aos-delay="200">
                  <div className="content">
                    <div className="image">
                      <img
                        src="frontend/assets/img/all-img/events-image-3.png"
                        alt="image"
                      />
                    </div>
                    <div className="text">
                      <div className="tag">News</div>
                      <h2>
                        <a href="blog-details">
                          Beyond Graduation: Canyon University's Blog for Alumni
                        </a>
                      </h2>
                      <span>October 06, 2024</span>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        avala fered alteration in some form.
                      </p>
                      <div className="link">
                        <a href="blog-details">
                          <i className="bx bx-link-external"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="upcoming-event">
                <h4 data-aos="fade-zoom-in" data-aos-delay="100">
                  Upcoming Events
                </h4>

                <div
                  className="event-dates"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="date">
                    <ul>
                      <li className="mnt">Oct</li>
                      <li className="det">07</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3>
                      <a href="blog-details">
                        Fintech & Key Investment Conference
                      </a>
                    </h3>
                    <p>
                      Seamlessly visualize quality ellectua capital without
                      super.
                    </p>
                    <div className="location">
                      <i className="bx bx-map"></i> Canyon Grand Hall
                    </div>
                    <div className="link">
                      <a href="blog-details">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="event-dates"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="date">
                    <ul>
                      <li className="mnt">Oct</li>
                      <li className="det">09</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3>
                      <a href="#">How to Organise Your Studies for Success</a>
                    </h3>
                    <p>
                      Seamlessly visualize quality ellectua capital without
                      super.
                    </p>
                    <div className="location">
                      <i className="bx bx-map"></i> Canyon Grand Hall
                    </div>
                    <div className="link">
                      <a href="#">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="event-dates"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="date">
                    <ul>
                      <li className="mnt">Oct</li>
                      <li className="det">19</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3>
                      <a href="blog-details">
                        Planning And Facilitating Effective Meetings
                      </a>
                    </h3>
                    <p>
                      Seamlessly visualize quality ellectua capital without
                      super.
                    </p>
                    <div className="location">
                      <i className="bx bx-map"></i> Canyon Grand Hall
                    </div>
                    <div className="link">
                      <a href="blog-details">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="event-dates"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                >
                  <a className="btn" href="news-and-blog">
                    View More Events <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="success-area success-area-2 ptb-100">
        <div className="container">
          <div
            className="section-title section-title-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="sub-title">
              <p>Student, Faculty and Alumni Success</p>
            </div>
            <h2>Celebrating the Legacy, Embracing the Future</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="success-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/success-image-1.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <div className="play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=LlCwHnp3kL4"
                    >
                      <i className="bx bx-play"></i>
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a href="university-life">
                        <h3>Amelia Harper ’23 (BA) </h3>
                      </a>
                    </li>
                    <li className="link">
                      <a href="university-life">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="success-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/success-image-2.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <div className="play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=LlCwHnp3kL4"
                    >
                      <i className="bx bx-play"></i>
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a href="">
                        <h3>Oliver Elijah ’23 (BS/BA)</h3>
                      </a>
                    </li>
                    <li className="link">
                      <a href="university-life">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="success-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="image">
                  <img
                    src="frontend/assets/img/all-img/success-image-3.png"
                    alt="image"
                  />
                </div>
                <div className="content">
                  <div className="play">
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=LlCwHnp3kL4"
                    >
                      <i className="bx bx-play"></i>
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a href="university-life">
                        <h3>Sofia Grace ’15 (BA)</h3>
                      </a>
                    </li>
                    <li className="link">
                      <a href="university-life">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-btn text-center"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <p>
              Inspiring Minds, Shaping Futures.{" "}
              <a href="undergraduate">
                Learn about the USD Honors Program{" "}
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
