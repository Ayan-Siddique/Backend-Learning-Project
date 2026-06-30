// src/pages/auth/Login.jsx
import BrandPanel from "../components/BrandPanel.jsx";
import OAuthButtons from "../components/OAuthButtons.jsx";
import "../style/auth.scss";
import { useAuth } from "../hooks/useAuth.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(email, password);

    navigate("/");
  };

  if (loading)
    return (
      <main>
        <center>
          <h1>Loading.....</h1>
        </center>
      </main>
    );

  return (
    <div className="auth-layout">
      {/* Left – branding */}
      <BrandPanel />

      {/* Right – form */}
      <div className="auth-right">
        <div className="auth-form-container">
          <h1>Welcome back</h1>
          <p className="auth-subtitle">Sign in to your DevConnect account</p>

          {/* OAuth */}
          <OAuthButtons />

          <div className="auth-divider">
            <span>or continue with email</span>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Form */}
            <input
              id="email"
              label="Email address"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="you@example.com"
              icon="✉"
            />

            <input
              id="password"
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Enter your password"
              icon="🔒"
            />

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary">
              Sign in to DevConnect
            </button>
          </form>
          <p className="auth-switch">
            Don't have an account? <Link to="/register">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
