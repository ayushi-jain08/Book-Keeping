import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "70vh" }}
    >
      <div className="mt-4 ">
        <h1 className="text-4xl text-center mb-6 font-bold font-sans">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="text" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary mt-2">Login</button>
          <div className="text-center py-2 text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/register" className="underline text-black">
              Register now{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
