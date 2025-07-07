"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        {/* banner-area-start */}
        <div className="banner-area banner-area1 pos-rel z-index-2">
          {/* line animation - start */}
          <div className="line_wrap banner-line">
            <div className="line_item"></div>
          </div>
          {/* line animation - end */}
          <div className="swiper-container slider__active">
            <div className="swiper-wrapper">
              {[1, 2, 3].map((item, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="single-banner single-banner-1 banner-1080 p-relative d-flex align-items-center">
                    <div
                      className={`banner-bg banner-bg1 banner-bg1-${item}`}
                      data-background={`/frontend/assets/img/banner/banner-1-${item}.jpg`}
                    ></div>
                    <div className="arm-hero-shape-wrapper">
                      <div className="arm-hero-shape arm-shape-a-1">
                        <img src="/frontend/assets/img/shape/shape-1.png" alt="shape-1" />
                      </div>
                      {item !== 2 && (
                        <>
                          <div className="arm-hero-shape arm-shape-a-2">
                            <img src="/frontend/assets/img/shape/shape-2.png" alt="shape-2" />
                          </div>
                          <div className="arm-hero-shape arm-shape-a-4">
                            <img src="/frontend/assets/img/shape/shape-4.png" alt="shape-4" />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="Griffin Cybernetic-shape">
                      <span className="stroke-text">Griffin Cybernetic</span>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className={`banner-content banner-content1 banner-content1-${item} pt-100`}>
                            <div className="banner-meta-text">
                              <span>
                                {item === 2
                                  ? "THE WORLD BEST ARMED FORCES"
                                  : "GRIFFIN CYBERNETIC"}
                              </span>
                            </div>
                            <h1 className="banner-title">
                              {item === 1 && (
                                <>
                                  <span className="title-anim-part-1">
                                    <span>Approved in Indian </span>
                                  </span>
                                  <span className="title-anim-part-2">
                                    <span>
                                      <span className="marked-text">Armed Forces</span> & Registered GeM Sellers
                                    </span>
                                  </span>
                                </>
                              )}
                              {item === 2 && (
                                <>
                                  <span className="title-anim-part-1">
                                    <span>
                                      Indian Armed Forces <span className="marked-text">.</span>
                                    </span>
                                  </span>
                                  <span className="title-anim-part-2">
                                    <span>by Cybernetic</span>
                                  </span>
                                </>
                              )}
                              {item === 3 && (
                                <>
                                  <span className="title-anim-part-1">
                                    <span>maximum flexibility</span>
                                  </span>
                                  <span className="title-anim-part-2">
                                    <span>
                                      & <span className="marked-text">solid security</span>
                                    </span>
                                  </span>
                                </>
                              )}
                            </h1>
                            <div className="banner-btn mt-80">
                              <Link href="#"
                                 className="arm-btn arm-btn-white">
                                  <span className="circle-btn">
                                    <i className="fal fa-long-arrow-right"></i>
                                  </span>
                                  Our Services
                                
                              </Link>
                              <Link href="https://www.youtube.com/watch?v=q0IHRgeatHI" 
                                className={`arm-play-btn popup-video ${item === 2 ? "d-none" : ""}`}>
                                  {item === 1 ? "Book Now" : "Play Now"}
                                  <i className="fal fa-caret-right"></i>
                                
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="slider-pagination slider1-pagination"></div>
        </div>

        {/* activity-area-start */}
        <section className="activity-area pt-130 pb-30 p-relative bg-white z-index-2 fix">
          <div className="deco_wrap">
            <div className="line_wrap body-line">
              <div className="line_item"></div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="bd-section-title-wrapper centered-title wow fadeInUp" data-wow-delay=".3s">
                  <div className="bd-section-subtitle">
                    <i className="flaticon-001-bullet"></i>
                    GRIFFIN CYBERNETIC
                    <i className="flaticon-001-bullet"></i>
                  </div>
                  <h3 className="bd-section-title mb-50">
                    FOUR ENVIRONMENTS <br /> ONE FORCE
                  </h3>
                </div>
              </div>
            </div>
            <div className="activity-inner p-relative">
              <div className="activity-shape">
                <img className="activity-area-shape-1" src="/frontend/assets/img/icons/icon-2/frame.png" alt="frame" />
                <img
                  className="activity-area-shape-2"
                  src="/frontend/assets/img/shape/activity/framimg-1.png"
                  alt="frame-img"
                />
              </div>
              <div className="row">
                {[
                  {
                    title: "AIR FORCE",
                    icon: "flaticon-011-fighter-jet",
                    img: "gallery/air-force/gallery3.jpg",
                  },
                  {
                    title: "ARMY",
                    icon: "flaticon-007-tank",
                    img: "facility/img-1.jpg",
                  },
                  {
                    title: "NAVY",
                    icon: "flaticon-002-anchor",
                    img: "gallery/navy/gallery1.jpg",
                  },
                  {
                    title: "SPECIAL FORCES",
                    icon: "flaticon-026-police-hat",
                    img: "gallery/police/gallery4.jpg",
                  },
                ].map((item, i) => (
                  <div className="col-xl-3 col-lg-6 wow fadeInUp" data-wow-delay={`.${i + 3}s`} key={i}>
                    <Link href="#">
                    
                        <div className="activity-content mb-30">
                          <div className="activity-bg">
                            <img src={`/frontend/assets/img/${item.img}`} alt={item.title} />
                            <img
                              className="activity-shape-1"
                              src="/frontend/assets/img/shape/round-1.png"
                              alt="round-1"
                            />
                            <img
                              className="activity-shape-2"
                              src="/frontend/assets/img/shape/round-1.png"
                              alt="round-1"
                            />
                          </div>
                          <div className="activity-content-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="activity-title">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="about-area pt-70 pb-65 p-relative bg-white z-index-2 fix">
        <div className="deco_wrap">
          <div className="line_wrap body-line">
            <div className="line_item"></div>
          </div>
        </div>

        <div className="container">
          <div className="about-inner p-relative">
            <div className="about-area-shape">
              <img className="about-shape-1" src="/frontend/assets/img/shape/x-frame.png" width={1000} height={1000} alt="img not found" />
            </div>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="about-thumb-1-area">
                  <div className="about-thumb-1-wrapper mb-65 p-relative z-index-1">
                    <div className="about-thumb about-thumb-1 p-relative wow fadeInLeft" data-wow-delay=".3s">
                      <img src="/frontend/assets/img/about/img-2.png" width={1000} height={1000} alt="img not found" />
                      <div className="panel wow"></div>
                    </div>
                    <div className="facility-shape-wrapper">
                      <img className="about-shape about-img" src="/frontend/assets/img/about/img-1.jpg" width={1000} height={1000} alt="img not found" />
                      <img className="about-shape shape-1" src="/frontend/assets/img/shape/round-1.png" width={100} height={100} alt="img not found" />
                     <img className="about-shape shape-2" src="/frontend/assets/img/shape/round-2.png" width={100} height={100} alt="img not found" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="about-content-wrapper mb-65 wow fadeInRight" data-wow-delay=".3s">
                  <div className="bd-section-title-wrapper">
                    <div className="bd-section-subtitle">
                      our activities <i className="flaticon-001-bullet"></i>
                    </div>
                    <h3 className="bd-section-title mb-40">
                      About Our Work
                      <span className="title-bg">
                        <img src="/frontend/assets/img/shape/scratched-shape.png" width={1000} height={100} alt="img not found" />
                      </span>
                    </h3>
                  </div>
                  <div className="about-content">
                    <p>
                      Griffin Cybernetic has been established in year 2022 with its regd. office at Veer Colony, Bathinda –151001 (PB), a trailblazer in the manufacturing of modular steel structures and cutting-edge defencesystems.
                    </p>
                  </div>
                  <div className="border-box">
                    <div className="row">
                      <div className="col-xl-6 col-md-6">
                        <div className="about-info">
                          <div className="about-info-icon">
                            <i className="flaticon-032-riot-police"></i>
                          </div>
                          <div className="about-info-text">
                            <span>
                              <span className="odometer" data-count="1250">0</span> +
                            </span>
                            <p>Total Team members</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="about-info">
                          <div className="about-info-icon">
                            <i className="flaticon-027-check"></i>
                          </div>
                          <div className="about-info-text">
                            <span>
                              <span className="odometer" data-count="350">0</span> +
                            </span>
                            <p>Operations Completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-content">
                    <p>
                      With a steadfast commitment to precision engineering and unwavering quality, we have emerged as a trusted partner for projects that demand the highest standards of safety, durability and innovation.
                    </p>
                    <div className="about-btn mt-40">
                      <Link href="/about-us" className="arm-btn">
                        <span className="circle-btn">
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                        More About us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


          <section className="service-area service-style pt-130 pb-65" style={{ backgroundImage: `url('/frontend/assets/img/bg/img-1.png')` }}>
        <div className="overlay-img"></div>
        <div className="service-shape-wrapper">
          <div className="service-shape shape-1">
            <img src="/frontend/assets/img/shape/service/img-1.png" width={500} height={500} alt="img not found" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="services-title-wrapper mb-65 wow fadeInUp" data-wow-delay=".3s">
                <div className="bd-section-title-wrapper">
                  <div className="bd-section-subtitle">
                    Special services <i className="flaticon-001-bullet"></i>
                  </div>
                  <h3 className="bd-section-title text-white">
                    A STRONG MILITARY <br /> IS CREATED ONE WAY
                  </h3>
                </div>
                <div className="service-btn mt-65">
                  <a href="https://www.youtube.com/watch?v=q0IHRgeatHI" className="popup-video">
                    <svg version="1.1" className="play-svg" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160 160" xmlSpace="preserve">
                      <path className="st0" d="M158.1,79.9c0,43.1-35,78.1-78.1,78.1S1.9,123,1.9,79.9" />
                      <g>
                        <defs>
                          <rect id="SVGID_1_" x="60" y="60" width="40" height="40" />
                        </defs>
                        <clipPath id="SVGID_2_">
                          <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                        </clipPath>
                        <g className="st1">
                          <path className="st2" d="M94.7,75.4L71.1,60.8c-1.7-1.1-3.8-1.1-5.5-0.1c-1.8,1-2.8,2.8-2.8,4.8v29c0,3,2.4,5.5,5.5,5.5c0,0,0,0,0,0
  c0.9,0,1.9-0.3,2.8-0.9c0.7-0.4,1-1.4,0.5-2.1c-0.4-0.7-1.4-1-2.1-0.5c-0.4,0.3-0.8,0.4-1.2,0.4c-1.1,0-2.3-1-2.3-2.4v-29
  c0-0.9,0.4-1.6,1.2-2c0.8-0.4,1.6-0.4,2.4,0L93,78c0.7,0.4,1.1,1.2,1.1,2c0,0.8-0.4,1.6-1.1,2L76,92.5c-0.7,0.4-1,1.4-0.5,2.1
  c0.4,0.7,1.4,1,2.1,0.5l17.1-10.5c1.6-1,2.6-2.7,2.6-4.7C97.3,78.1,96.3,76.4,94.7,75.4z" />
                        </g>
                      </g>
                      <path className="st3" d="M158.1,79.9c0,43.1-35,78.1-78.1,78.1S1.9,123,1.9,79.9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="service-slide-wrapper p-relative mb-65">
                <div className="service-pagination circle-dot-pagination"></div>
                <div className="service-slider swiper-container">
                  <div className="swiper-wrapper">
                    {[1, 2, 3].map((i) => (
                      <div className="swiper-slide" key={i}>
                        <div className="service-content">
                          <div className="service-thumb">
                            <a href="">
                              <img src={`/frontend/assets/img/service/img-${i}.png`} width={500} height={300} alt="img not found" />
                            </a>
                          </div>
                          <div className="service-info">
                            <h4 className="service-title">
                              <a href="">
                                {i === 1 && "Special Operations Preparation Course ( SOPC )"}
                                {i === 2 && "Special Forces Preparation and Conditioning ( SFPC )"}
                                {i === 3 && "Special Forces Assessment and Selection ( SFAS )"}
                              </a>
                            </h4>
                            <a href="" className="arrow-text-btn">
                              <i className="flaticon-042-arrow-right"></i>
                              <span>Service Details</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
        <section className="facility-area pt-130 pb-65 fix p-relative bg-white z-index-2">

            <div className="deco_wrap">
                <div className="line_wrap body-line">
                    <div className="line_item"></div>
                </div>
            </div>
        

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-10">
                        <div className="facility-thumb-wrapper p-relative mb-65 z-index-2">
                            <div className="facility-thumb p-relative wow fadeInLeft" data-wow-delay=".3s">
                                <img src="/frontend/assets/img/facility/img-1.jpg" alt="img not found"/>
                                <div className="panel wow"></div>

                            </div>
                            <div className="facility-shape-wrapper">
                                <div className="facility-shape-1"></div>
                                <div className="facility-shape-2">Griffin Cybernetic</div>
                                <img className="facility-shape-3" src="/frontend/assets/img/shape/radius-border.png"
                                    alt="img not found"/>
                                <img className="facility-shape-4" src="/frontend/assets/img/shape/round-1.png" alt="img not found"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="facility-content mb-25 wow fadeInRight" data-wow-delay=".3s">
                            <div className="bd-section-title-wrapper">
                                <div className="bd-section-subtitle">
                                    The Best fighters Team
                                    <i className="flaticon-001-bullet"></i>
                                </div>
                                <h3 className="bd-section-title mb-4">Saved 3800+ Lives
                                    and Properties
                                    <span className="title-bg">
                                        <img src="/frontend/assets/img/shape/scratched-shape.png" alt="img not found"/>
                                    </span>
                                </h3>
                            </div>
                            <p className="">Have questions or need more information? We’re here to help.
Whether you’re looking for a customized defense solution, partnership opportunity, or product details — our team is ready to assist you.

Fill out the form below and we’ll get back to you as soon as possible.
                            </p>
                            <div className="facility-info-list mt-40 mb-40">
                                <ul>
                                    <li className="">
                                        <div className="facility-info">
                                            <div className="info-icon">
                                                <i className="flaticon-044-check-2"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>Dedicated to Save Lives</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="facility-info">
                                            <div className="info-icon">
                                                <i className="flaticon-044-check-2"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>24/7 Available to Save</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="facility-info">
                                            <div className="info-icon">
                                                <i className="flaticon-044-check-2"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>95% Life saving rate</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="">
                                        <div className="facility-info">
                                            <div className="info-icon">
                                                <i className="flaticon-044-check-2"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>Latest Sequrity Technique</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="arm-counter-item-wrapper mt-50" id="percentage">
                                <div className="counter_item mb-30">
                                    <div className="counter_canvas">
                                        <div className="circle_counter" data-count="95">
                                            <span className="counter_percentage"></span>
                                        </div>
                                    </div>
                                    <p className="arm-counter-title">Families Saved</p>
                                </div>
                                <div className="counter_item mb-30">
                                    <div className="counter_canvas">
                                        <div className="circle_counter" data-count="65">
                                            <span className="counter_percentage"></span>
                                        </div>
                                    </div>
                                    <p className="arm-counter-title">Property Saved</p>
                                </div>
                                <div className="counter_item mb-30">
                                    <div className="counter_canvas">
                                        <div className="circle_counter" data-count="85">
                                            <span className="counter_percentage"></span>
                                        </div>
                                    </div>
                                    <p className="arm-counter-title">World War</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
        <section className="donation-area pt-130 pb-130 donation-style fix">
            <div className="donation-overlay-img area-absolute parallax-bg "
                data-background="/frontend/assets/img/bg/donation-parallax.jpg">
            </div>
            <div className="container">
                <div className="donation-inner p-relative">
                    <div className="donation-shape-wrapper">
                        <img className="donation-shape shape-1" src="/frontend/assets/img/shape/circle.png" alt="img not found"/>
                        <img className="donation-shape shape-2" src="/frontend/assets/img/shape/shape-2.png" alt="img not found"/>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="dontaion-content-wrapper wow fadeInUp" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper">
                                    <div className="bd-section-subtitle">
                                        JOIN NOW
                                        <i className="flaticon-001-bullet"></i>
                                    </div>
                                    <h3 className="bd-section-title mb-40">HELP US to
                                        CONTINUE <br/> OUR MISSION</h3>
                                </div>

                                <div className="donation-content">
                                    <p>Griffin Cybernetic weapon often resembles real firearms, but the
                                        replicas shoot small plastic 6mm BBs. In its nature, airsoft is similar to
                                        first-person shooting video games, and it allows experiencing realistic battle
                                        and
                                        tactical
                                        scenario gameplay.
                                    </p>
                                    <p className="donation-2">MAKE A <span>GIFT
                                            TODAY</span> TO SUPPORT
                                        MILITARY FAMILIES</p>
                                    <div className="donation-btn mt-40">
                                        <a href="#" className="arm-btn"><span className="circle-btn"><i
                                                    className="fas fa-heart"></i></span>GIVE A LIKE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="cta-area  pt-130 pb-60 p-relative bg-white z-index-2">

            
            <div className="deco_wrap">
                <div className="line_wrap body-line">
                    <div className="line_item"></div>
                </div>
            </div>
         

            <div className="container">
                <div className="cta-box p-relative wow fadeInUp" data-wow-delay=".3s">
                    <div className="cta-thumb">
                        <img src="/frontend/assets/img/bg/img-3.png" alt="img not found"/>
                    </div>
                    <div className="cta-shape-wrapper">
                        <img className="cta-shape-1" src="/frontend/assets/img/shape/frame-3.png" alt="img not found"/>
                        <img className="cta-shape-2" src="/frontend/assets/img/shape/frame-3.png" alt="img not found"/>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-content">
                                <div className="bd-section-title-wrapper centered-title">
                                    <div className="bd-section-subtitle cta-color">
                                        <i className="flaticon-001-bullet"></i>
                                        <span>call now</span>
                                        <i className="flaticon-001-bullet"></i>
                                    </div>
                                    <h3 className="bd-section-title mb-40"><u>24/7
                                            Available. Call us Immediately</u></h3>
                                </div>
                                <div className="cta-num  text-center">
                                    <h3><a href="tel:+916668880000">+91 666 888 0000</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        <section className="latest-news-are pt-70 pb-100 p-relative bg-white z-index-2">

      
            <div className="deco_wrap">
                <div className="line_wrap body-line">
                    <div className="line_item"></div>
                </div>
            </div>
           

            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper wow fadeInUp" data-wow-delay=".3s">
                            <div className="bd-section-subtitle">
                                latest blog news
                                <i className="flaticon-001-bullet"></i>
                            </div>
                            <h3 className="bd-section-title mb-50">Griffin Cybernetic latest news
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="news-btn mb-65 wow fadeInUp" data-wow-delay=".3s">
                            <a href="" className="arrow-text-btn">
                                <i className="flaticon-042-arrow-right"></i>
                                <span>View All Blog</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="single-news wow fadeInUp" data-wow-delay=".3s">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="latest-news-thumb mb-30">
                                        <a href=""><img src="/frontend/assets/img/news/img-1.jpg"
                                                alt="img not found"/></a>
                                        <div className="panel wow"></div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="news-box mb-30">
                                        <div className="news-box-date">
                                            <div className="news-box-inner">
                                                <h3>25</h3>
                                                <span>JUN 2022</span>
                                            </div>
                                        </div>
                                        <div className="news-box-content">
                                            <h4 className=""><a href="">SF medical sergeant -- 46 weeks.
                                                    The <br/>
                                                    18D education is arguably</a></h4>
                                            <p className="">Griffin Cybernetic weapon often resembles
                                                real firearms, but the
                                                replicas shoot
                                                small plastic 6mm BBs. In its nature, airsoft is similar to first-person
                                                shooting
                                                video games, and it allows experiencing.</p>
                                            <div className="blog-btn mt-40">
                                                <a href="" className="arm-btn"><span className="circle-btn"><i
                                                            className="fal fa-long-arrow-right"></i></span>Read
                                                    More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-news wow fadeInUp" data-wow-delay=".3s">
                            <div className="row align-items-center">
                                <div className="col-xl-6 order-xl-2">
                                    <div className="latest-news-thumb mb-30">
                                        <a href=""><img src="/frontend/assets/img/news/img-2.jpg"
                                                alt="img not found"/></a>
                                        <div className="panel wow"></div>
                                    </div>
                                </div>
                                <div className="col-xl-6 order-xl-1">
                                    <div className="news-box mb-30">
                                        <div className="news-box-date">
                                            <div className="news-box-inner">
                                                <h3>25</h3>
                                                <span>JUN 2022</span>
                                            </div>
                                        </div>
                                        <div className="news-box-content">
                                            <h4 className=""><a href="">You will receive MOS training for
                                                    <br/> your
                                                    Special Forces MOS</a></h4>
                                            <p className="">Griffin Cybernetic weapon often resembles
                                                real firearms, but the
                                                replicas shoot
                                                small plastic 6mm BBs. In its nature, airsoft is similar to first-person
                                                shooting
                                                video games, and it allows experiencing.</p>
                                            <div className="blog-btn mt-40">
                                                <a href="" className="arm-btn"><span className="circle-btn"><i
                                                            className="fal fa-long-arrow-right"></i></span>Read
                                                    More</a>
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
        
        <section className="contact-form-area pt-0 pb-0 contact-form-style parallax-bg fix"
            data-background="/frontend/assets/img/bg/form-parallax.jpg">
            <div className="contact-overlay">
            </div>
            <div className="container">
                <div className="contact-form-inner p-relative">
                    <div className="contact-form-shape-wrapper">
                        <img className="contact-form-area-shape-1" src="/frontend/assets/img/shape/shape-slice-circle-3.png"
                            alt="img not found"/>
                        <img className="contact-form-area-shape-2" src="/frontend/assets/img/shape/circle.png" alt="img not found"/>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-5">
                            <div className="contact-content pt-130 pb-120 wow fadeInUp" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper">
                                    <div className="bd-section-subtitle">
                                        inquire now
                                        <i className="flaticon-001-bullet"></i>
                                    </div>
                                    <h3 className="bd-section-title mb-40">request for
                                        information</h3>
                                </div>
                                <p className="">Have questions or need more information? We’re here to help.
Whether you’re looking for a customized defense solution, partnership opportunity, or product details — our team is ready to assist you.

Fill out the form below and we’ll get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-7">
                            <div className="contact-form-wrapper-1">
                                <form action="#">
                                    <div className="single-input-field field-f-name">
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="single-input-field field-f-name">
                                        <input type="text" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-input-field field-phone">
                                        <input type="text" placeholder="Phone Number"/>
                                    </div>
                                    <div className="single-input-field field-subject">
                                        <input type="text" placeholder="Subject"/>
                                    </div>
                                    <div className="single-input-field field-message">
                                        <textarea name="message" placeholder="Write Message . . ."></textarea>
                                    </div>
                                    <div className="form-btn mt-30">
                                        <button className="border-btn" type="submit">Request Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div className="brand-area  pt-130 pb-130 bg-white p-relative z-index-2">

            
            <div className="deco_wrap">
                <div className="line_wrap body-line">
                    <div className="line_item"></div>
                </div>
            </div>
           

            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="brand-active slider-drag wow fadeInUp" data-wow-delay=".3s">
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-1.png" alt="img not found"/>
                            </div>
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-2.png" alt="img not found"/>
                            </div>
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-3.png" alt="img not found"/>
                            </div>
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-4.png" alt="img not found"/>
                            </div>
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-5.png" alt="img not found"/>
                            </div>
                            <div className="arm-brand">
                                <img src="/frontend/assets/img/brand/img-3.png" alt="img not found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
