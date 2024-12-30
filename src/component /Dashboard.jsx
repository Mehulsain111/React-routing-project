import React, { useContext } from "react";
import { PostListContext } from "../Store/store";

export const Dashboard = () => {
  const { postlist, deletePost } = useContext(PostListContext); // Accessing postlist and deletePost from context

  // Log postlist to check if data exists
  console.log("Post list in Dashboard:", postlist);

  return (
    <div className="container">
      <h1>User Details</h1>
      {postlist.length > 0 ? (
        postlist.map((post) => (
          <div key={post.id} className="card">
            <p>Name: {post.name}</p>
            <p>Email: {post.email}</p>
            <p>Password: {post.password}</p>
            <button
              className="btn btn-danger"
              onClick={() => deletePost(post.id)} // Delete post on button click
            >
              Delete ID
            </button>
          </div>
        ))
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};
