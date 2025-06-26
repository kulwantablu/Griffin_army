"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    const response = await fetch("/api/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    console.log("Response:", data); // 🪵 Log what comes back
    if (data.message === "Post created") {
      alert("✅ Post added successfully!");
      router.push("/admin/posts");
    } else {
      alert("❌ Failed to add post. Try again.");
    }
  };

  return (
   
    <div style={{ padding: "20px" ,width: "60%",margin: "auto"}}>
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Add Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              
              <div className="col-sm-12">
              <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="form-control form-control-user"
                />
              </div>
            </div>

            <div className="form-group row">
             
              <div className="col-sm-12">
              <label>Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={5}
                  className="form-control form-control-user"
                />
              </div>
            </div>
 
            <div className="form-group row">
              <div className="col-sm-12 mb-3 mb-sm-0">
                <button type="submit" className="btn btn-primary btn-user">
                  Add Post
                </button>
              </div>
            </div>
          </form>
       
      </div>
   
  );
}
