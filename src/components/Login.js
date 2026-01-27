import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleSign = () => {
        setIsSignUp(!isSignUp);
    };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-screen object-cover "
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="Netflix Logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        
        <form className="relative flex flex-col space-y-4 w-80 bg-black p-6 rounded-md bg-black/75">
        <h1 className="relative font-bold text-4xl mb-6">{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
        )}
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-gray-800 border border-gray-700"
          />
          {isSignUp && (
            <input
              type="confirmPassword"
              placeholder="Confirm Password"
              className="p-2 rounded bg-gray-800 border border-gray-700"
            />
          )}
          <button
            type="submit"
            className="bg-red-600 p-2 rounded hover:bg-red-700 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-gray-400 text-sm mt-2 hover:cursor-pointer" onClick={toggleSign}>{isSignUp ? "Already have an account? Sign in now." : "Don't have an account? Sign up now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
