"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts/get")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Handle Delete
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      const response = await fetch("/api/posts/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.message === "Post deleted successfully") {
        alert("Post deleted!");
        setPosts(posts.filter((post) => post.id !== id)); // Remove from UI
      }
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Show Posts</h1>
      </div>
        <Link href="/admin/posts/add">
        <button className="btn btn-success">Add New</button>
</Link>
        <a href="/admin/posts/add">
         
        </a>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <form name="form1" method="post" action="">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post: any) => (
                <tr>
                  <td>{post.id}</td>

                  <td>
                  {post.title}
                  </td>
                  <td>
                  {post.content}
                  </td>
                 
                  <td>
                  <Link href={`/admin/posts/edit/${post.id}`}>
              <button className="btn btn-success" >Edit</button>
            </Link>
                    
                  </td>
                  <td>
                  <button onClick={() => handleDelete(post.id)}   className="btn btn-danger">Delete</button>
                  
                  </td>
                </tr>
                 ))
                )}
                
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
