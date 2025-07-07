"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-sticky">
        
        <section className="subscribe-area footer-bg pt-130 pb-80 p-relative z-index-1">
          <div className="noise-wrapper">
            <div className="noise"></div>
          </div>
          <div className="container">
            <div className="subscribe-inner p-relative">
              <div className="subscribe-shape-wrapper">
                <img
                  className="subscribe-area-shape-1"
                  src="/frontend//assets/img/shape/footer/img-2.png"
                  alt="subscribe shape"
                />
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="subscribe-wrapper">
                    <div className="subscribe-icon">
                      <i className="flaticon-070-email-1"></i>
                    </div>
                    <div className="subscribe-text">
                      <h3 className="subscribe-title">Connect With Our Team</h3>
                    </div>
                    <div className="subscribe-form p-relative">
                      <div className="single-input-field field-email">
                        <input type="email" placeholder="Enter Your Mail" />
                      </div>
                      <div className="subs-btn">
                        <a href="#" className="fill-btn">Reach Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* subscribe-area-end */}

        <section className="footer-widget-area footer-bg p-relative z-index-1">
          <div className="noise-wrapper">
            <div className="noise"></div>
          </div>
          <div className="container">
            <div className="footer-shape-wrapper">
              <div className="footer-shape shape-1">
                <img src="/frontend//assets/img/shape/footer/img-1.png" alt="footer shape" />
              </div>
            </div>
            <div className="arm-footer-border">
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  <div className="arm-footer-widget footer2-widget-1 mb-40">
                    <div className="footer-widget-logo mb-30">
                      <Link href="/">
                        <img src="/frontend//assets/img/logo/logo-white.png" alt="logo" />
                      </Link>
                    </div>
                    <p>
                      Griffin Cybernetic has been established in 2022 with its registered office at Veer Colony, Bathinda –151001 (PB), a trailblazer in the manufacturing of modular steel structures and cutting-edge defense systems.
                    </p>
                    <div className="footer-widget-social">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="arm-footer-widget footer2-widget-2 mb-40">
                    <div className="footer-widget-title">
                      <h3>Our Address</h3>
                    </div>
                    <div className="footer-widget-contact">
                      <ul>
                        <li>
                          <div className="arm-single-contact">
                            <div className="footer-contact-icon">
                              <i className="flaticon-077-map"></i>
                            </div>
                            <p>Bathinda, Punjab, 151001</p>
                          </div>
                        </li>
                        <li>
                          <div className="arm-single-contact">
                            <div className="footer-contact-icon">
                              <i className="flaticon-073-email-2"></i>
                            </div>
                            <p>
                              <a href="mailto:info@griffincybernetic.in">
                                info@griffincybernetic.in
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="arm-single-contact">
                            <div className="footer-contact-icon">
                              <i className="flaticon-060-call"></i>
                            </div>
                            <p>
                              <a href="tel:912569320003">+91 123-123-1234</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="arm-footer-widget footer2-widget-3 mb-40">
                    <div className="footer-widget-blog">
                      <div className="footer-widget-title">
                        <h3>Recent News</h3>
                      </div>

                      <div className="blog-single blog-footer mb-30">
                        <div className="footer-blog-thumb">
                          <Link href="#"><img src="/frontend/assets/img/blog/blog-5.jpg" alt="blog image" /></Link>
                        </div>
                        <div className="arm-footer-blog-content">
                          <div className="footer-blog-title">
                            <h5>
                              <Link href="#">Save Lives Fire Safety Rules</Link>
                            </h5>
                          </div>
                          <div className="arm-footer-blog-meta-list">
                            <div className="arm-footer-blog-meta">
                              <div className="footer-blog-icon">
                                <i className="flaticon-048-calendar"></i>
                              </div>
                              <div className="footer-blog-meta-text">
                                <span>20 Sep, 2025</span>
                              </div>
                            </div>
                            <div className="arm-footer-blog-meta">
                              <div className="footer-blog-icon">
                                <i className="flaticon-052-chat-bubble"></i>
                              </div>
                              <div className="footer-blog-meta-text">
                                <Link href="#"><span>0 Comments</span></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="blog-single blog-footer mb-30">
                        <div className="footer-blog-thumb">
                          <Link href="#"><img src="/frontend/" alt="blog image" /></Link>
                        </div>
                        <div className="arm-footer-blog-content">
                          <div className="footer-blog-title">
                            <h5>
                              <Link href="#">
                                Griffin Cybernetic robotics grants for 100 schools of forces training
                              </Link>
                            </h5>
                          </div>
                          <div className="arm-footer-blog-meta-list">
                            <div className="arm-footer-blog-meta">
                              <div className="footer-blog-icon">
                                <i className="flaticon-048-calendar"></i>
                              </div>
                              <div className="footer-blog-meta-text">
                                <span>20 Sep, 2024</span>
                              </div>
                            </div>
                            <div className="arm-footer-blog-meta">
                              <div className="footer-blog-icon">
                                <i className="flaticon-052-chat-bubble"></i>
                              </div>
                              <div className="footer-blog-meta-text">
                                <Link href="#"><span>0 Comments</span></Link>
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
          </div>
        </section>

        <div className="copyright-area footer-bg pt-60 pb-60 p-relative z-index-1">
          <div className="noise-wrapper">
            <div className="noise"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="copyright-text copyright-2-text text-center">
                  Copyright &copy; 2023 by Griffin Cybernetic. All rights reserved.
                  Developed by{" "}
                  <a href="https://digitaldreamsscapes.com/" target="_blank" rel="noopener noreferrer">
                    Digital Dreamsscapes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
