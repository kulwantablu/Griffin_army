"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditAbout() {
    const [vision, setVision] = useState({
        heading: '',
        detail: ''
      });
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/vision/get`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setVision(data); 
      });
  }, []);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting data:", vision);

    const response = await fetch("/api/vision/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading: vision.heading,
        detail: vision.detail,
      }),
    });

    const data = await response.json();

    if (response.ok && data.message === "vision updated successfully") {
      alert("vision updated!");
      router.push("/admin/vision");
    } else {
      alert("Failed to update: " + data.message);
      console.error("Error:", data);
    }
  };

  return (
    <div style={{ padding: "20px", width: "60%", margin: "auto" }}>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Vision</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-sm-12">
            <label>Heading</label>
            <input
              type="text"
              className="form-control form-control-user"
              value={vision.heading}
              onChange={(e) => setVision({ ...vision, heading: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12">
            <label>Detail</label>
            <textarea
              className="form-control form-control-user"
              value={vision.detail}
              onChange={(e) => setVision({ ...vision, detail: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12 mb-3 mb-sm-0">
            <button type="submit" className="btn btn-primary btn-user">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
