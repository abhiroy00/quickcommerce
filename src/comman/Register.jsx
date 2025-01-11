import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Register() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h3 class="card-title text-center mb-4">Register Now</h3>
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

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
                  <div class="mb-3">
                    <label for="confirmPassword" class="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="terms"
                      required
                    />
                    <label class="form-check-label" for="terms">
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>

                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
