"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-area">
        <div className="footer-widget-info ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4>Campus Life</h4>
                  <ul>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Accessibility
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Financial Aid
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Food Services
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Housing
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Information
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Student Life
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4>Our Campus</h4>
                  <ul>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Academic
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Planning &
                        Administration
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Campus Safety
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Office of the
                        Chancellor
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Facility
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Human Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4>Academics</h4>
                  <ul>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Canvas
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Catalyst
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Library
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Time Schedule
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Apply For
                        Admissions
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Pay My Tuition
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4>Information For</h4>
                  <ul>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> How To Apply
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Dates &
                        Deadlines
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Student
                        Activities
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Support &
                        Guidance
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Schedule A Tour
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bx-chevron-right"></i> Faculty & Staffs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area style-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="cpr-left">
                  <p>
                    Copyright© 2025<a href="#">Edusquare Solutions</a>, All
                    rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cpr-right">
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                  </ul>
                  <ul className="social-list">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copy-logo">
              <img
                src="frontend/assets/img/logo/footer-Logo.jpg"
                style={{ width: "150px" }}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
