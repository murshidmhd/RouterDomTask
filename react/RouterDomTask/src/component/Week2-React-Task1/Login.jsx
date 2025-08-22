import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <span>
              Don't have an account? <Link to="/registration">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
