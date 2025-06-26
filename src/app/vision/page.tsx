"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const [vision, setVision] = useState({ heading: '', detail: '' });
  const [mission, setMission] = useState({ heading: '', detail: '' });

  useEffect(() => {
    fetch(`/api/vision/get`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched vision data:", data);
        setVision(data);
      })
      .catch((err) => console.error("Error fetching vision:", err));
  }, []);

  useEffect(() => {
    fetch(`/api/mission/get`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched mission data:", data);
        setMission(data);
      })
      .catch((err) => console.error("Error fetching mission:", err));
  }, []);

  return (
    <>
      <div className="section-banner bg-1">
        <div className="container">
          <div className="banner-spacing">
            <div className="section-info">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Vision & Mission
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div
                className="text-content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title-anim">{vision.heading}</h2>
                <p className="title-anim">{vision.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div
                className="text-content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title-anim">{mission.heading}</h2>
                <p className="title-anim">{mission.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
