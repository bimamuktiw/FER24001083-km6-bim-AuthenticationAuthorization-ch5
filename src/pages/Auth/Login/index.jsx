import React, { useState } from "react";
import GoogleLogin from "../GoogleOauth";
import Button from "../../../component/atoms/Button";
import { useLogin } from "../../../hooks/useAuth";
import { Link } from "react-router-dom/cjs/react-router-dom";
import AuthLayout from "..";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { loading, action } = useLogin();

  const handleSignIn = () => {
    if (!email.trim()) {
      setEmailError("Emailnya diisi ya manis.");
      return;
    }
    setEmailError(null);

    if (!password.trim()) {
      setPasswordError("Passwordnya diisi ya cinta.");
      return;
    }
    setPasswordError(null);

    action(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-5">
        <h1 className="text-white">Login</h1>
        <input
          className="px-4 py-2 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(fejs) => setEmail(fejs.target.value)}
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
        <div className="relative">
          <input
            className="px-4 py-2 rounded-lg w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"} 
            value={password}
            onChange={(fejs) => setPassword(fejs.target.value)}
          />
          <button
            className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-black"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {passwordError && <div className="text-red-500">{passwordError}</div>}
        <Button
          className="py-2"
          variant="primary"
          loading={loading}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <hr />
        <GoogleLogin buttonText="Sign in with Google" />
        <span className="text-center text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register Now
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}
