import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostListContext } from "../Store/store";

export const BookApointment = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostListContext); // Accessing addPost from context

  // State to hold form input values
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // State to manage form validation
  const [isValid, setIsValid] = useState(true);

  // Function to check if form is valid
  const validateForm = () => {
    setIsValid(name !== "" && email !== "" && password !== "" && isChecked);
  };

  // Handle changes in input fields
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

  // Use effect to validate the form after each state change
  useEffect(() => {
    validateForm();
  }, [name, email, password, isChecked]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      addPost(name, email, password); // Add post (user details) on submit
      navigate("/dashboard"); // Navigate to dashboard if valid
    }
  };

  return (
    <div>
      <form
        className="w-50 m-auto mt-5 card bg-secondary"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <div className="name d-flex align-items-center p-3">
            <label
              htmlFor="exampleInputName"
              className="form-label px-3 fw-bold"
            >
              Full Name :
            </label>
            <input
              type="text"
              name="name"
              className="form-control w-75 border-black px-4 shadow"
              id="exampleInputName"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="Email d-flex align-items-center  p-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label pe-1 fw-bold"
            >
              Email address :
            </label>
            <input
              type="email"
              className="form-control w-75 border-black px-4 shadow"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div id="emailHelp" className="form-text text-center fw-bold">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3 d-flex px-4">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label pe-3 ps-3 fw-bold"
          >
            Password :
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="form-control border w-75 border-black shadow"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-3 fw-bold px-5 form-check">
          <input
            type="checkbox"
            className="form-check-input border-black"
            id="exampleCheck1"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-50 m-auto my-2 fw-bold"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
