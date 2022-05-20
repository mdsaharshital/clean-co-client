import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  let from = location?.state?.from?.pathname || "/";
  //
  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, from]);
  //
  if (googleLoading) {
    <h1>Loading.....</h1>;
  }
  return (
    <div className="hero pt-16 min-h-screen bg-accent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>

              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-accent"
              >
                Signin With Google
              </button>
              {googleError && (
                <p className="text-error">
                  <small>{googleError?.message}</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
