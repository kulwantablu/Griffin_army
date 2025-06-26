"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditAbout() {
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
        setAbout(data); // Directly set the object
      });
  }, []);
    

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting data:", about);

    const response = await fetch("/api/about/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading: about.heading,
        detail: about.detail,
      }),
    });

    const data = await response.json();

    if (response.ok && data.message === "About updated successfully") {
      alert("About updated!");
      router.push("/admin/about");
    } else {
      alert("Failed to update: " + data.message);
      console.error("Error:", data);
    }
  };

  return (
    <div style={{ padding: "20px", width: "60%", margin: "auto" }}>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">About</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-sm-12">
            <label>Heading</label>
            <input
              type="text"
              className="form-control form-control-user"
              value={about.heading}
              onChange={(e) => setAbout({ ...about, heading: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12">
            <label>Detail</label>
            <textarea
              className="form-control form-control-user"
              value={about.detail}
              onChange={(e) => setAbout({ ...about, detail: e.target.value })}
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
