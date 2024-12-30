import React, { useReducer, createContext } from "react";

// Create context to hold post list and actions
export const PostListContext = createContext();

const postlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload]; // Adds a new post (user details)
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId); // Deletes a post (user details)
    default:
      return state;
  }
};

export const PostListProvider = ({ children }) => {
  const initialState = [];

  const [postlist, dispatch] = useReducer(postlistReducer, initialState);

  // Add post to the state (user details)
  const addPost = (userName, userEmail, userPassword) => {
    const newPost = {
      id: Date.now(),
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    dispatch({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  // Delete post (user details) by ID
  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postlist,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
