"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [about, setAbout] = useState({
    heading: '',
    detail: ''
  });

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/about/get`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setAbout(data); // Assumes data has .heading and .detail
      });
  }, []);

  return (
    <>
      <div className="section-banner bg-1">
        <div className="container">
          <div className="banner-spacing">
            <div className="section-info">
              <h2 data-aos="fade-up" data-aos-delay="100">
                About Us
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div
                className="text-content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title-anim">{about.heading}</h2>
                <p className="title-anim">{about.detail}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row justify-content-end">
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div
                    className="content"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <img
                      src="frontend/assets/img/all-img/about-image.png"
                      alt="About"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
