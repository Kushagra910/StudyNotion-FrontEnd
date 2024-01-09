import React from "react";
import "../index.css"; // Import the CSS file for styling

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <p className="error-message">
          Oops! The page you are looking for might be in another castle.
        </p>
      </div>
    </div>
  );
};

export default Error;
