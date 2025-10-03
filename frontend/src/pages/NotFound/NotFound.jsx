import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <i className="fas fa-exclamation-triangle page-icon"></i>
      <h1 className="heading">404</h1>
      <p className="text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="button">
        <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
        Go Back Home
      </Link>
    </div>
  );
};


export default NotFound;
