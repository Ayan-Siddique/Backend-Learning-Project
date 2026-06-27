// src/pages/auth/Register.jsx
import BrandPanel from "../components/BrandPanel.jsx";
import OAuthButtons from "../components/OAuthButtons.jsx";
import InputField from "../components/InputField.jsx";
import "../style/auth.scss";

const Register = () => {
  return (
    <div className="auth-layout">
      {/* Left – branding */}
      <BrandPanel />

      {/* Right – form */}
      <div className="auth-right">
        <div className="auth-form-container">
          <h1>Create your account</h1>
          <p className="auth-subtitle">Join 2.4M+ developers on DevConnect</p>

          {/* OAuth */}
          <OAuthButtons />

          <div className="auth-divider">
            <span>or continue with email</span>
          </div>

          {/* Name row */}
          <form>
            <div className="form-row">
              <InputField
                id="first-name"
                label="First name"
                type="text"
                placeholder="John"
                icon="👤"
              />
              <InputField
                id="last-name"
                label="Last name"
                type="text"
                placeholder="Doe"
                icon="👤"
              />
            </div>

            <InputField
              id="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon="✉"
            />

            <InputField
              id="username"
              label="Username"
              type="text"
              placeholder="johndoe"
              icon="@"
            />

            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              icon="🔒"
            />

            <InputField
              id="confirm-password"
              label="Confirm password"
              type="password"
              placeholder="Repeat your password"
              icon="🔒"
            />

            <button type="submit" className="btn-primary">
              Create account
            </button>
          </form>
          <p className="auth-terms">
            By creating an account, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          <p className="auth-switch">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
