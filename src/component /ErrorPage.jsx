import React from "react";

export const ErrorPage = () => {
  return (
    <div className="fw-bolder text-danger mt-3">
      <h1>
        {" "}
        The page is not found{" "}
        <span className="text-danger bg-warning rounded p-1 border border-danger ">
          Error !
        </span>
      </h1>
    </div>
  );
};
