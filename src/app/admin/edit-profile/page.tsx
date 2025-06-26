"use client";

import { useState } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/edit-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully");
    } catch (error) {
      alert(error instanceof Error ? error.message : "An error occurred");
    }
  };
 
  return (
    <div style={{ padding: "20px" ,width: "60%",margin: "auto"}}>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Edit Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            className="form-control"
           
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit"  className="btn btn-primary btn-user " style={{marginTop:"20px"}}>Save Changes</button>
      </form>
    </div>
  );
}
