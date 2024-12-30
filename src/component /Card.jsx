import React from "react";
// import { useState } from "react";
// const [ShowEmail, setShowEmail] = useState(0);
export const Card = () => {
  return (
    <div className="container ">
      <div className="card bg-secondary w-50 m-auto py-4 my-5">
        Name
        <p className="border border-warning rounded w-50 p-2 m-auto fw-bolder my-3">
          {Name}
        </p>
        <p className="border border-warning rounded w-50 p-2 m-auto fw-bolder my-3">
          Email
        </p>
        <button className="btn btn-warning w-50 m-auto border-black">
          Show password
        </button>
      </div>
    </div>
  );
};
{
  formSubmitted && (
    <div className="mt-4 card p-4 bg-light">
      <h5>Form Entries:</h5>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
}
