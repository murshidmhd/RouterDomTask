import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Welcome to Home!</h1>
      <p className="lead mb-4">
        Navigate to Registration or Login to get started.
      </p>
      <div>
        <Link className="btn btn-primary me-3" to="/login">
          Login
        </Link>
        <Link className="btn btn-success" to="/registration">
          Registration
        </Link>
      </div>
    </div>  
  );
}

export default Home;
