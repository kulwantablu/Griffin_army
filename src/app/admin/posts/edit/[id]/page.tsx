"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState({ title: "", content: "" });
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/posts/get?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
        }
      });
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/posts/edit", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: params.id, ...post }),
    });

    const data = await response.json();
    if (data.message === "Post updated successfully") {
      alert("Post updated!");
      router.push("/admin/posts");
    }
  };

  return (
    <div style={{ padding: "20px" ,width: "60%",margin: "auto"}}>
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Edit Post</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          
          <div className="col-sm-12">
          <label>Title</label>
            <input
              type="text"
              className="form-control form-control-user"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          
          <div className="col-sm-12">
          <label>Title</label>
            <textarea
              value={post.content}
              className="form-control form-control-user"
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12 mb-3 mb-sm-0">
            <button
              type="submit"
              className="btn btn-primary btn-user "
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
