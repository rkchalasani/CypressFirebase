import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Signin.css";
import { FaGoogle, FaFacebook, FaApple, FaGithub } from "react-icons/fa";
const Signin = () => {
  const { githubSignIn, facebookSignIn, googleSignIn, signIn, user } =
    UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      // navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const handleFbSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      // navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const handleGitSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      // navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2 ">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
          id="input-email"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
          id="input-pass"
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <button id="signinbutton" className="border border-black bg-black hover:bg-white hover:text-black w-full p-4 my-2 text-white">
          Sign In
        </button>
      </form>
      <div className="div">
        <FaGoogle onClick={handleGoogleSignIn} size={35} />
        <FaFacebook onClick={handleFbSignIn} size={35} />
        <FaGithub onClick={handleGitSignIn} size={35} />
      </div>
    </div>
  );
};

export default Signin;
