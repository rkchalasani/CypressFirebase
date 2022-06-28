import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, emailVerification, currentUser } = UserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    var atposition = email.indexOf("@");

    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "" || password == null || password === "") {
      alert("Fill the required feilds");
    } else if (password.length < 6) {
      alert("Password must be of 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      alert("Please enter email address");
    }else{
    try {
      await createUser(email, password);
      await emailVerification(auth);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    }
    };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="py-2">
          Already have an account yet?{" "}
          <Link to="/" className="underline">
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            id="signup-email"
          
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="text"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
        
            id="signup-pass"
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <button
          id="signupbutton"
          className="border border-black bg-black hover:bg-white hover:text-black w-full p-4 my-2 text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
