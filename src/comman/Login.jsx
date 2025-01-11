import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Outlet } from "react-router-dom";
function Login() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h3 class="card-title text-center mb-4">Login</h3>
                <form>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Remember Me
                    </label>
                  </div>

                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center mt-3">
                  <small>
                    Don't have an account? <Link to="/register">Sign up</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
